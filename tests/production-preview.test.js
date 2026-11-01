import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES, SITE, allLocalAssets } from './pages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const PREVIEW_URL = process.env.PREVIEW_URL || 'http://127.0.0.1:4173';

test('Production SEO identifies Lenard and exposes consistent crawlable URLs', async () => {
  const canonical = 'https://lenardangeloolajay.onrender.com/';
  const response = await fetch(`${PREVIEW_URL}/`);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.doesNotMatch(response.headers.get('x-robots-tag') || '', /noindex|none/i);
  assert.doesNotMatch(html, /<meta[^>]+content=["'][^"']*\b(?:noindex|none)\b/i);
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`));
  assert.match(html, /<title>Lenard Angelo Olajay \| Developer &amp; Builder Portfolio<\/title>/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  const data = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const website = data['@graph'].find(item => item['@type'] === 'WebSite');
  const profile = data['@graph'].find(item => item['@type'] === 'ProfilePage');
  assert.equal(website.url, canonical);
  assert.equal(profile.url, canonical);
  assert.equal(profile.isPartOf['@id'], website['@id']);
  assert.equal(profile.mainEntity['@type'], 'Person');
  assert.equal(profile.mainEntity.name, 'Lenard Angelo Olajay');
  assert.equal(profile.mainEntity.url, canonical);
  for (const url of profile.mainEntity.sameAs) {
    assert.ok(html.includes(`href="${url}"`), `Identity link must match visible content: ${url}`);
  }
  assert.ok(html.includes(`<meta property="og:url" content="${canonical}">`));
  assert.ok(html.includes(`<meta property="og:image" content="${profile.mainEntity.image}">`));
  const portrait = await fetch(`${PREVIEW_URL}${new URL(profile.mainEntity.image).pathname}`);
  assert.equal(portrait.status, 200);
  assert.match(portrait.headers.get('content-type'), /^image\//);
  const robots = await fetch(`${PREVIEW_URL}/robots.txt`);
  assert.equal(robots.status, 200);
  assert.match(robots.headers.get('content-type'), /^text\/plain/);
  assert.equal((await robots.text()).replace(/\r\n/g, '\n').trim(), `User-agent: *\nAllow: /\n\nSitemap: ${canonical}sitemap.xml`);
  const sitemap = await fetch(`${PREVIEW_URL}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  assert.match(sitemap.headers.get('content-type'), /xml/);
  const xml = await sitemap.text();
  assert.ok(xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'));
  assert.deepEqual([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]), PAGES.map(p => `${SITE}${p.route}`));
});

test('Production preview serves every page quickly with its key content', async () => {
  const expected = {
    '/': ['Lenard Angelo Olajay', 'What I&#39;m building', 'Other builds'],
    '/aqone/': ['AqOne', 'Gabay sa Bawat Alon, Konektado sa Bawat Layon', 'Recognition'],
    '/devguild/': ['ASU Developers&#39; Guild', 'Learn. Build. Serve.', 'Recognitions'],
    '/credentials/': ['Competitions and awards', 'Skills training', 'Events and webinars'],
  };
  for (const page of PAGES) {
    const start = Date.now();
    const res = await fetch(`${PREVIEW_URL}${page.route}`);
    const elapsed = Date.now() - start;
    assert.equal(res.status, 200, `${page.route} should respond with 200`);
    assert.ok(elapsed < 1000, `${page.route} response time should be under 1s, was ${elapsed}ms`);
    const html = (await res.text()).replace(/'/g, '&#39;');
    for (const text of expected[page.route]) {
      assert.ok(html.includes(text), `${page.route} must contain ${text}`);
    }
  }
});

test('Production preview serves each page\'s built stylesheet and no scripts', async () => {
  for (const page of PAGES) {
    const html = await (await fetch(`${PREVIEW_URL}${page.route}`)).text();
    const cssMatch = html.match(/href=["'](\/assets\/[^"']+\.css)["']/);
    assert.ok(cssMatch, `${page.route} must link the production stylesheet`);
    assert.equal((await fetch(`${PREVIEW_URL}${cssMatch[1]}`)).status, 200, 'Production CSS must respond with 200');
    assert.doesNotMatch(html, /<script(?![^>]*application\/ld\+json)[^>]*>/, `${page.route} must ship no scripts`);
  }
});

test('Production preview serves all public documents, fonts, and images with 200 OK', async () => {
  for (const urlPath of allLocalAssets()) {
    const res = await fetch(`${PREVIEW_URL}${urlPath}`);
    assert.equal(res.status, 200, `Asset ${urlPath} should resolve with 200 on preview, got ${res.status}`);
  }
});
