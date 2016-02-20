export const
  srcDir    = './src/',
  buildDir  = './dist/',
  vendorDir = './node_modules/',
  mainCss   = 'index.css',
  mainJs    = 'index.js',
  port      = 3000

import gulp         from 'gulp'
import browserify   from 'browserify'
import babelify     from 'babelify'
import source       from 'vinyl-source-stream'
import concat       from 'gulp-concat'
import live         from 'gulp-connect'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps   from 'gulp-sourcemaps'

export {
  gulp,
  browserify,
  babelify,
  source,
  concat,
  live,
  autoprefixer,
  sourcemaps
}