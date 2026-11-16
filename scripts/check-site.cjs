// Validate deployable files and local navigation without network access.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const errors = [];
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (new Set(ids).size !== ids.length) errors.push('Duplicate HTML IDs found.');
for (const id of ['about', 'experience', 'education', 'skills', 'certifications', 'projects', 'contact']) {
  if (!ids.includes(id)) errors.push(`Missing section: ${id}`);
}
for (const [, link] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
  if (/^(https?:|mailto:)/.test(link)) continue;
  if (link.startsWith('#')) {
    if (!ids.includes(link.slice(1))) errors.push(`Broken section link: ${link}`);
    continue;
  }
  const target = path.resolve(dist, link.split(/[?#]/)[0]);
  if (!target.startsWith(dist + path.sep) || !fs.existsSync(target)) {
    errors.push(`Missing or invalid local asset: ${link}`);
  }
}
const pdf = path.join(dist, 'resume.pdf');
if (!fs.existsSync(pdf) || fs.readFileSync(pdf).subarray(0, 5).toString() !== '%PDF-') {
  errors.push('The public resume must be a PDF.');
}
if (!html.includes('href="resume.pdf"')) errors.push('Resume link must point to the PDF.');
if (!html.includes('name="viewport"')) errors.push('Missing mobile viewport metadata.');
for (const script of ['dist/script.js', 'preview.cjs']) {
  try { execFileSync(process.execPath, ['--check', path.join(root, script)], { stdio: 'pipe' }); }
  catch (error) { errors.push(`JavaScript syntax error in ${script}: ${error.stderr}`); }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('PASS: seven sections, unique IDs, local links/assets, PDF signature/link, viewport metadata, and JavaScript syntax.');
  console.log('Browser layout, external links, GitHub authentication, and Pages settings require separate verification.');
}
