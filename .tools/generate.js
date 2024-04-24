const fs = require('fs');
const path = require('path');

const templatePath = path.resolve(__dirname, 'templates', 'template.js');
const templateSpecPath = path.resolve(__dirname, 'templates', 'template.spec.js');

const template = fs.readFileSync(templatePath, 'utf8');
const templateSpec = fs.readFileSync(templateSpecPath, 'utf8');

const args = process.argv.slice(2);

function generate(fileName) {
  const fileContent = template.replace(/__FILENAME__/g, fileName)
  const specFileContent = templateSpec.replace(/__FILENAME__/g, fileName)

  fs.writeFileSync(`${fileName}.js`, fileContent)
  fs.writeFileSync(`${fileName}.spec.js`, specFileContent)
}

generate(args[0])
