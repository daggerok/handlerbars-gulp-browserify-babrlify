import {gulp, vendorDir, live, buildDir, srcDir, mainCss, sourcemaps, autoprefixer, concat} from './common.babel'

gulp.task('css', () => {
  return gulp.src([
      `${vendorDir}bootstrap/dist/css/bootstrap.css`,
      srcDir + mainCss
    ])
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat(mainCss))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(buildDir))
    .pipe(live.reload())
})