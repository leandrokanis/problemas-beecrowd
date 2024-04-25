const fs = require('fs');
const path = require('path');

// Get absolute paths for template files
const templatePath = path.resolve(__dirname, 'templates', 'template.ts');
const templateSpecPath = path.resolve(__dirname, 'templates', 'template.spec.ts');

// Read the template files
const template = fs.readFileSync(templatePath, 'utf8');
const templateSpec = fs.readFileSync(templateSpecPath, 'utf8');

const args = process.argv.slice(2);

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function generate(fileName) {
  // Replace the placeholder __FILENAME__ with the actual file name
  const fileContent = template.replace(/__FILENAME__/g, fileName);
  const specFileContent = templateSpec.replace(/__FILENAME__/g, fileName);

  // Get the current working directory
  const currentDir = process.cwd();

  // Get absolute paths for output files in the current directory
  const outputFile = path.resolve(currentDir, `${fileName}.ts`);
  const specOutputFile = path.resolve(currentDir, `${fileName}.spec.ts`);

  // Check if files already exist
  if (fileExists(outputFile) || fileExists(specOutputFile)) {
    console.log('Error: File already exists.');
    return;
  }

  // Write the files to disk
  fs.writeFileSync(outputFile, fileContent);
  fs.writeFileSync(specOutputFile, specFileContent);
}

generate(args[0]);
