const { execSync } = require('child_process');
const os = require('os');
const path = require('path');

function runCommand(command) {
  try {
    const result = execSync(command, { stdio: 'pipe' });
    if (result)
      console.log(result.toString());
  } catch (error) {
    console.error('Error executing command:', error);
    process.exit(1);
  }
}

function copyFilesWindows() {
  console.log('Copying files for Windows...');

  runCommand('mkdir dist\\core\\src\\db');

  runCommand('xcopy .\\src\\core\\src\\db\\ .\\dist\\core\\src\\db\\ /s /e');

  console.log('Files copied successfully for Windows.');
}

function copyFilesLinux() {
  console.log('Copying files for Linux...');

  runCommand('mkdir -p dist/core/src/db');

  runCommand('cp -r ./src/core/src/db/* ./dist/core/src/db');

  console.log('Files copied successfully for Linux.');
}

function copyFilesMac() {
  console.log('Copying files for macOS...');

  runCommand('mkdir -p dist/core/src/db');

  runCommand('cp -r ./src/core/src/db/* ./dist/core/src/db');

  console.log('Files copied successfully for macOS.');
}

function copyFiles() {
  const platform = os.type();

  switch (platform) {
    case 'Linux':
      copyFilesLinux();
      break;
    case 'Darwin':
      copyFilesMac();
      break;
    case 'Windows_NT':
      copyFilesWindows();
      break;
    default:
      console.error('Unsupported OS found: ' + platform);
      process.exit(1);
  }
}

copyFiles();
