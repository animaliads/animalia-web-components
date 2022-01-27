import { readdir } from 'fs/promises';
import { readFileSync, writeFile } from 'fs';
import path from 'path';

const iconsDir = 'svg';
const finalFilePath = path.join('src', 'svg.ts');

try {
  const files = await readdir(iconsDir);

  const svgs = getSvgs(files);
  writeSvgInFile(svgs);
} catch (err) {
  console.error(err);
}

function writeSvgInFile(svgs) {
  const content = `export const svgs = ${JSON.stringify(svgs, null, 4)}
  `;

  writeFile(path.join(finalFilePath), content, err => {
    if (err) console.log(err);
  });
}

function getSvgs(files) {
  const svgs = {};

  for (const filename of files) {
    const file = readFileSync(path.join(iconsDir, filename), {
      encoding: 'utf8',
    });

    svgs[filename.replace('.svg', '')] = file;
  }

  return svgs;
}
