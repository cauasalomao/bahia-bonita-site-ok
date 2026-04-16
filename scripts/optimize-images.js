const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const MAX_WIDTH = 2000;
const QUALITY = 82;
const MIN_BYTES = 500 * 1024;

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.error('usage: node optimize-images.js <file> [<file>...]');
  process.exit(1);
}

(async () => {
  for (const file of targets) {
    const stat = fs.statSync(file);
    if (stat.size < MIN_BYTES) {
      console.log(`skip (small): ${file}`);
      continue;
    }
    const img = sharp(file, { failOn: 'none' });
    const meta = await img.metadata();
    const width = meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width;
    const tmp = file + '.tmp';
    await img
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toFile(tmp);
    const newSize = fs.statSync(tmp).size;
    const before = (stat.size / 1024 / 1024).toFixed(2);
    const after = (newSize / 1024 / 1024).toFixed(2);
    if (newSize < stat.size) {
      fs.renameSync(tmp, file);
      console.log(`${file}: ${before} MB -> ${after} MB (${meta.width}w -> ${width}w)`);
    } else {
      fs.unlinkSync(tmp);
      console.log(`${file}: already optimized (${before} MB)`);
    }
  }
})();
