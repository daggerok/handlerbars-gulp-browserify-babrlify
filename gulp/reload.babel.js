import {gulp, live, buildDir, port} from './common.babel'

gulp.task('reload', () => {
  return live.server({
    root: buildDir,
    livereload: true,
    port: port
  })
})