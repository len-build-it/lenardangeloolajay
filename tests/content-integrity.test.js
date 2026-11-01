import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PAGES, NAV_LINKS, SITE, projectRoot, readPage, localAssets, allLocalAssets } from './pages.js';

const meta = (html, attr, key) => {
  const m = html.match(new RegExp(`<meta ${attr}="${key}" content="([^"]*)"`));
  return m ? m[1] : null;
};

test('Public resume exists and is readable', () => {
  const resumePath = path.join(projectRoot, 'public/assets/documents/Lenard-Olajay-Resume-Updated.pdf');
  assert.ok(fs.existsSync(resumePath), 'Resume PDF must exist in public assets');
  assert.ok(fs.statSync(resumePath).size > 10000, 'Resume PDF must not be empty');
});

test('Every local asset referenced by any page exists in public/', () => {
  const missing = allLocalAssets().filter(
    (ref) => !fs.existsSync(path.join(projectRoot, 'public', decodeURIComponent(ref)))
  );
  assert.deepEqual(missing, [], `Missing local assets: ${missing.join(', ')}`);
});

test('Every referenced image is at most 200 KB', () => {
  const heavy = allLocalAssets()
    .filter((ref) => /\.(webp|jpe?g|png)$/i.test(ref))
    .filter((ref) => fs.statSync(path.join(projectRoot, 'public', decodeURIComponent(ref))).size > 200 * 1024);
  assert.deepEqual(heavy, [], `Images over 200 KB: ${heavy.join(', ')}`);
});

for (const page of PAGES) {
  test(`${page.name} page has its own metadata, one H1, skip link, and the shared header`, () => {
    const html = readPage(page);
    const canonical = `${SITE}${page.route}`;
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`), 'Canonical URL must match the route');
    assert.equal(meta(html, 'property', 'og:url'), canonical, 'og:url must match canonical');
    assert.ok(meta(html, 'name', 'description'), 'Meta description required');
    assert.match(html, /<a href="#main" class="skip-link">/, 'Skip link required');
    assert.match(html, /<main id="main">/, 'Main landmark target required');
    assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Exactly one H1');
    for (const href of NAV_LINKS) {
      assert.ok(html.includes(`<a href="${href}"`), `Header must link to ${href}`);
    }
    const current = [...html.matchAll(/<a href="([^"]+)" aria-current="page">/g)].map((m) => m[1]);
    assert.deepEqual(current, [page.route], 'Exactly one aria-current link, pointing at this page');
  });

  test(`${page.name} page loads nothing from third parties`, () => {
    const html = readPage(page);
    const external = [...html.matchAll(/<(?:script|link|img)\b[^>]*(?:src|href)="(https?:[^"]+)"/g)]
      .map((m) => m[1])
      .filter((url) => !url.startsWith(SITE));
    assert.deepEqual(external, [], `External resources: ${external.join(', ')}`);
    assert.doesNotMatch(html, /<script(?![^>]*application\/ld\+json)[^>]*>/, 'No scripts besides structured data');
  });
}

test('Titles and descriptions are unique across pages', () => {
  const titles = PAGES.map((p) => readPage(p).match(/<title>([^<]+)<\/title>/)[1]);
  const descriptions = PAGES.map((p) => meta(readPage(p), 'name', 'description'));
  assert.equal(new Set(titles).size, PAGES.length, 'Titles must be unique');
  assert.equal(new Set(descriptions).size, PAGES.length, 'Descriptions must be unique');
});

test('Home page anchors used by the header exist', () => {
  const html = readPage(PAGES[0]);
  for (const id of ['builds', 'skills', 'contact']) {
    assert.match(html, new RegExp(`id="${id}"`), `Home must contain #${id}`);
  }
});

test('Sitemap lists exactly the four page URLs', () => {
  const xml = fs.readFileSync(path.join(projectRoot, 'public/sitemap.xml'), 'utf-8');
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  assert.deepEqual(locs, PAGES.map((p) => `${SITE}${p.route}`));
});

test('Home page keeps contact links and leaks no private data', () => {
  const html = readPage(PAGES[0]);
  assert.match(html, /mailto:olajaylenardangelo@gmail\.com/i, 'Must contain valid mailto');
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/lenard-angelo-olajay-35b083366\//, 'LinkedIn link');
  assert.match(html, /https:\/\/github\.com\/len-build-it"/, 'GitHub link');
  assert.match(html, /https:\/\/www\.facebook\.com\/Ark\.Dcl\//, 'Facebook link');
  assert.match(html, /https:\/\/www\.instagram\.com\/len\.build\.it\//, 'Instagram link');
  assert.match(html, /https:\/\/ph\.jobstreet\.com\/profiles\/lenardangelo-olajay-n2tQmgnjYd/, 'JobStreet link');
  assert.match(html, /Privacy:/, 'Privacy notice in footer');
  for (const page of PAGES) {
    assert.doesNotMatch(readPage(page), /0994\s?489\s?1004|09944891004/, `${page.name}: no phone number`);
  }
});

test('No page links to the AqOne source repository', () => {
  for (const page of PAGES) {
    assert.doesNotMatch(readPage(page), /github\.com\/Aquanons/i, `${page.name}: AqOne repository must not be linked before the patent filing`);
  }
});

test('Warang and Project Tabang are listed as earlier builds', () => {
  const html = readPage(PAGES[0]);
  assert.match(html, />Earlier builds<\/h2>/, 'Section is titled Earlier builds');
  assert.doesNotMatch(html, /shelved/i, 'Builds are not described as shelved');
  for (const name of ['Warang', 'Project Tabang']) {
    assert.ok(html.includes(`>${name}</h3>`), `${name} is listed`);
  }
});

test('Credentials page lists all 16 certificates in three groups', () => {
  const html = readPage(PAGES[3]);
  for (const id of ['competitions', 'training', 'events']) {
    assert.match(html, new RegExp(`<section id="${id}"`), `Category section #${id}`);
  }
  assert.equal((html.match(/class="box cred-card"/g) || []).length, 16, 'Sixteen certificate cards');
  assert.equal(localAssets(html).filter((a) => a.startsWith('/assets/images/cert-')).length, 16, 'Sixteen certificate thumbnails');
});
