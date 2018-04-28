const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(rootPath, 'kzg_app-win32-x64/'),
    authors: 'Wolfleader101',
    noMsi: false,
    outputDirectory: path.join(outPath, 'windows-installer/'),
    exe: 'kzg_app.exe',
    setupExe: 'app-setup.exe',
    setupIcon: path.join(rootPath,'icon.ico')
  })
}
