import shelljs from 'shelljs'
import path from 'path'

shelljs.rm('-rf', path.resolve(__dirname, '../dist'))
