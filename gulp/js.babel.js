import {gulp, live, buildDir, srcDir, mainJs, browserify, babelify, source} from './common.babel'

gulp.task('js', () => {
  return browserify({
      entries: srcDir + mainJs, 
      extensions: ['.js'], 
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source(mainJs))
    .pipe(gulp.dest(buildDir))
    .pipe(live.reload())
})