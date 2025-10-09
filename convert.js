const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function scanDir(dir, extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(scanDir(fullPath, extensions));
    } else if (extensions.includes(path.extname(file).toLowerCase())) {
      files.push(fullPath);
    }
  });
  return files;
}

async function convertAllImages() {
  const images = scanDir('.', ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']);
  console.log(`Found ${images.length} images to convert.`);

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

async function optimizeLargeImages() {
  const extensions = ['.avif', '.webp'];
  const images = scanDir('.', extensions);

  console.log(`Found ${images.length} AVIF/WebP images to check for optimization.`);

  for (const imgPath of images) {
    try {
      const stat = fs.statSync(imgPath);
      if (stat.size <= 1048576) continue; // Already <1MB

      console.log(`Optimizing ${imgPath} (${(stat.size / 1024 / 1024).toFixed(2)}MB)`);

      // Backup original
      const backupPath = imgPath + '.bak';
      fs.renameSync(imgPath, backupPath);

      // Get metadata
      const metadata = await sharp(backupPath).metadata();

      // Calculate new dimensions (max 2000px on longest side)
      let width = metadata.width;
      let height = metadata.height;
      const maxDim = 2000;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      // Re-encode with resize and quality 70
      const ext = path.extname(imgPath);
      if (ext === '.avif') {
        await sharp(backupPath).resize(width, height).avif({ quality: 70, effort: 6 }).toFile(imgPath);
      } else if (ext === '.webp') {
        await sharp(backupPath).resize(width, height).webp({ quality: 70, effort: 6 }).toFile(imgPath);
      }

      console.log(`Optimized ${imgPath} to ${width}x${height}`);

    } catch (err) {
      console.error(`Error optimizing ${imgPath}:`, err);
    }
  }

  console.log('Optimization complete.');
}

convertImages();

module.exports = { convertImages, convertAllImages, removeLargeOriginals, optimizeLargeImages };
