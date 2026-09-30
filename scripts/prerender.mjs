import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const templatePath = path.resolve(rootDir, 'dist/chapter20/index.html');
const serverEntryPath = path.resolve(rootDir, 'dist/server/entry-server.js');

async function prerender() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}`);
  }
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Server entry not found at ${serverEntryPath}`);
  }

  const { render } = await import(pathToFileURL(serverEntryPath).href);
  const appHtml = render();

  const template = fs.readFileSync(templatePath, 'utf-8');
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Placeholder <div id="root"></div> not found in template');
  }

  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(templatePath, finalHtml, 'utf-8');
  console.log('Successfully pre-rendered HTML to dist/chapter20/index.html');

  // Clean up dist/server directory so it does not remain in output
  const serverDir = path.resolve(rootDir, 'dist/server');
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
    console.log('Removed dist/server directory');
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
