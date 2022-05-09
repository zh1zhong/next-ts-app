// const js = require('./public/aliplayercomponents-1.0.8.min.js')

const fs = require('fs')

const gitignorePath = '.gitignore'
const gitignorePathIsExist = fs.existsSync(gitignorePath)

console.log(gitignorePathIsExist)
if (gitignorePathIsExist) {
  fs.readFile(gitignorePath, 'utf-8', (err, data) => {
    if (err) {
      return console.error(error)
    }
    // console.log(data, data.toString())
    const newContent =
      data.toString() + '/n /public/aliplayercomponents-1.0.8.min.js'
    console.log(newContent)
    fs.writeFile('result.json', newContent, 'utf8', (err) => {
      if (err) throw err
      console.log('success done')
    })
  })
}
