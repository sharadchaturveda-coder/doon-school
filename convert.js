const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function scanDir(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(scanDir(fullPath));
    } else if (['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'].includes(path.extname(file).toLowerCase())) {
      files.push(fullPath);
    }
  });
  return files;
}

async function convertImages() {
  const images = scanDir('images');
  console.log(`Found ${images.length} large images to convert.`);

  for (const imgPath of images) {
    const dirname = path.dirname(imgPath);
    const ext = path.extname(imgPath);
    const basename = path.basename(imgPath, ext);
    const avifPath = path.join(dirname, basename + '.avif');
    const webpPath = path.join(dirname, basename + '.webp');

    try {
      const buffer = fs.readFileSync(imgPath);

      // Convert to AVIF
      await sharp(buffer).avif({ quality: 80, effort: 6 }).toFile(avifPath);

      // Convert to WebP
      await sharp(buffer).webp({ quality: 80, effort: 6 }).toFile(webpPath);

      console.log(`Converted ${imgPath} to AVIF (${avifPath}) and WebP (${webpPath})`);
    } catch (err) {
      console.error(`Error converting ${imgPath}:`, err);
    }
  }

  console.log('Conversion complete.');
}

async function removeLargeOriginals() {
  const allImages = scanDirWithoutSize('images').filter(img => ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'].includes(path.extname(img).toLowerCase()));
  let removedCount = 0;

  for (const imgPath of allImages) {
    try {
      const stat = fs.statSync(imgPath);
      if (stat.size > 1048576) { // >1MB
        fs.unlinkSync(imgPath);
        console.log(`Removed large original: ${imgPath}`);
        removedCount++;
      }
    } catch (err) {
      console.error(`Error checking/removing ${imgPath}:`, err);
    }
  }

  console.log(`Removed ${removedCount} large original images.`);
}

function scanDirWithoutSize(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(scanDirWithoutSize(fullPath));
    } else {
      files.push(fullPath);
    }
  });
  return files;
}

convertImages();

module.exports = { convertImages, removeLargeOriginals };
