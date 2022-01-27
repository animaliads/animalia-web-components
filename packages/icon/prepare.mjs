import { readdir } from 'fs/promises';
import { readFileSync, writeFile } from 'fs';
import path from 'path';

const svgs = {};

const pathIcons = 'svg';
const finalPath = path.join('src', 'svg.ts');

try {
  const files = await readdir(pathIcons);
  for (const filePath of files) {
    const file = readFileSync(path.join(pathIcons, filePath), {
      encoding: 'utf8',
      flag: 'r',
    });

    svgs[filePath.replace('.svg', '')] = file;
  }

  const content = `export const svgs = ${JSON.stringify(svgs, null, 4)}
  `;

  writeFile(path.join(finalPath), content, err => {
    if (err) console.log('ERRO: ', err);
    else {
      console.log('File written successfully\n');
    }
  });
} catch (err) {
  console.error(err);
}
