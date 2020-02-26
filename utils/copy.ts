import shelljs from 'shelljs'
import path from 'path'

shelljs.rm('-rf', path.resolve(__dirname, '../dist/views'))
shelljs.rm('-rf', path.resolve(__dirname, '../dist/public'))
shelljs.cp('-R', path.resolve(__dirname, '../src/views'), path.resolve(__dirname, '../dist/'))
shelljs.cp('-R', path.resolve(__dirname, '../src/public'), path.resolve(__dirname, '../dist/'))
