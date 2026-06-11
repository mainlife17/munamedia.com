import { readFileSync, existsSync } from 'node:fs';

const mode = process.argv[2] || 'dist';
const site = 'https://munaagency.com';

const checks = [
  {
    path: '/',
    file: 'dist/index.html',
    required: ['Muna Media', 'G-6N3G44P5EQ', '109772530', 'window.mmTrack', 'application/ld+json', 'canonical']
  },
  {
    path: '/case-studies/',
    file: 'dist/case-studies/index.html',
    required: ['No invented numbers', 'Disclosed proof points', 'SalamPay', 'canonical', 'og:title']
  },
  {
    path: '/cases/salampay-launch/',
    file: 'dist/cases/salampay-launch/index.html',
    required: ['430,000', '27,086,000', 'Operating model', 'Public evidence', 'canonical']
  },
  {
    path: '/cases/yandex-eats-uzbekistan/',
    file: 'dist/cases/yandex-eats-uzbekistan/index.html',
    required: ['888,239', 'Kazakhstan', 'Uzbekistan', 'canonical']
  },
  {
    path: '/studio/',
    file: 'dist/studio/index.html',
    required: ['Sanity']
  }
];

async function readTarget(check) {
  if (mode === 'live') {
    const response = await fetch(new URL(check.path, site), {
      headers: { 'user-agent': 'muna-media-audit/1.0', 'cache-control': 'no-cache' }
    });
    const text = await response.text();
    return { text, status: response.status, target: new URL(check.path, site).toString() };
  }

  if (!existsSync(check.file)) {
    throw new Error(`Missing file: ${check.file}`);
  }
  return { text: readFileSync(check.file, 'utf8'), status: 200, target: check.file };
}

let failures = 0;
for (const check of checks) {
  const { text, status, target } = await readTarget(check);
  console.log(`\n${target} status=${status} bytes=${text.length}`);
  if (status < 200 || status >= 300) {
    console.log(`  FAIL status ${status}`);
    failures++;
  }
  for (const needle of check.required) {
    const ok = text.includes(needle);
    console.log(`  ${ok ? 'OK  ' : 'FAIL'} ${needle}`);
    if (!ok) failures++;
  }
}

if (mode === 'live') {
  const studio = await fetch(`${site}/studio/`, { headers: { 'user-agent': 'muna-media-audit/1.0' } });
  const html = await studio.text();
  const match = html.match(/src="(\/static\/[^"]+\.js)"/);
  if (match) {
    const assetUrl = `${site}${match[1]}`;
    const asset = await fetch(assetUrl, { headers: { 'user-agent': 'muna-media-audit/1.0' } });
    const contentType = asset.headers.get('content-type') || '';
    const ok = asset.ok && contentType.includes('javascript');
    console.log(`\n${assetUrl} status=${asset.status} content-type=${contentType}`);
    console.log(`  ${ok ? 'OK  ' : 'FAIL'} Sanity static JS asset`);
    if (!ok) failures++;
  } else {
    console.log('\nFAIL no Sanity static JS asset found');
    failures++;
  }
}

if (failures) {
  console.error(`\nAudit failed: ${failures} issue(s)`);
  process.exit(1);
}

console.log('\nAudit passed');
