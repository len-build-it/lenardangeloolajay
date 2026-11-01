import test from 'node:test';
import assert from 'node:assert/strict';
import { PAGES, allLocalAssets } from './pages.js';

async function getActiveServerUrl() {
  if (process.env.PREVIEW_URL) return process.env.PREVIEW_URL;
  for (const port of [4173, 5173]) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(600) });
      if (res.status === 200) return `http://127.0.0.1:${port}`;
    } catch {}
  }
  return null;
}

test('Active server serves every page with 200 OK', async () => {
  const serverUrl = await getActiveServerUrl();
  assert.ok(serverUrl, 'A local server (preview: 4173 or dev: 5173) must be active for this check');
  for (const page of PAGES) {
    const res = await fetch(`${serverUrl}${page.route}`);
    assert.equal(res.status, 200, `${page.route} should respond with 200`);
    const html = await res.text();
    assert.ok(html.includes('Lenard Angelo Olajay'), `${page.route} should name Lenard Angelo Olajay`);
  }
});

test('Every local asset referenced by any page resolves on the active server', async () => {
  const serverUrl = await getActiveServerUrl();
  assert.ok(serverUrl, 'A local server must be active for this check');
  const assets = allLocalAssets();
  assert.ok(assets.length >= 30, `Found ${assets.length} local assets in markup`);
  for (const urlPath of assets) {
    const res = await fetch(`${serverUrl}${urlPath}`);
    assert.equal(res.status, 200, `Asset ${urlPath} should resolve with 200, got ${res.status}`);
    assert.ok((await res.arrayBuffer()).byteLength > 0, `Asset ${urlPath} must not be empty`);
  }
});
