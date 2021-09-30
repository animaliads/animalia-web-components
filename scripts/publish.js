const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const distPackagesPath = './dist/@animaliads';

const packages = fs.readdirSync(distPackagesPath);

packages.forEach(package => {
  const pathPublish = path.join(distPackagesPath, package);

  publishNpm(pathPublish);
});

function publishNpm(pathPublish) {
  exec(
    `npm run publish ${pathPublish} --access public`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
  );
}
