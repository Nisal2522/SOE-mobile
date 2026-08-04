/**
 * Regenerates PWA / Apple touch icons from src/assets/logo.png
 * Usage: node scripts/generate-pwa-icons.mjs
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const logoPath = path.join(root, 'src', 'assets', 'logo.png');
const outDir = path.join(root, 'public');

async function makeIcon(size, outName) {
  const padding = Math.round(size * 0.12);
  const maxW = size - padding * 2;
  const maxH = size - padding * 2;
  const resized = await sharp(logoPath)
    .resize(maxW, maxH, { fit: 'inside' })
    .png()
    .toBuffer();
  const meta = await sharp(resized).metadata();
  const left = Math.floor((size - meta.width) / 2);
  const top = Math.floor((size - meta.height) / 2);
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    },
  })
    .composite([{ input: resized, left, top }])
    .png()
    .toFile(path.join(outDir, outName));
  console.log(`Wrote ${outName} (${size}x${size})`);
}

await makeIcon(192, 'pwa-192.png');
await makeIcon(512, 'pwa-512.png');
await makeIcon(180, 'apple-touch-icon.png');
