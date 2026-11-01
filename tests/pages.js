import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const SITE = 'https://lenardangeloolajay.onrender.com';

export const PAGES = [
  { route: '/', file: 'index.html', name: 'Home' },
  { route: '/aqone/', file: 'aqone/index.html', name: 'AqOne' },
  { route: '/devguild/', file: 'devguild/index.html', name: 'Dev Guild' },
  { route: '/credentials/', file: 'credentials/index.html', name: 'Credentials' },
];

export const NAV_LINKS = ['/', '/aqone/', '/devguild/', '/#builds', '/#skills', '/credentials/', '/#contact'];

export function readPage(page) {
  return fs.readFileSync(path.join(projectRoot, page.file), 'utf-8');
}

export function localAssets(html) {
  const refs = [...html.matchAll(/(?:href|src)=["'](\/assets\/[^"'#?]+)["']/g)].map((m) => m[1]);
  return [...new Set(refs)];
}

export function allLocalAssets() {
  return [...new Set(PAGES.flatMap((page) => localAssets(readPage(page))))];
}
