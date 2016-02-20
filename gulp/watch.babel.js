import {gulp, srcDir} from './common.babel'

gulp.task('watch', ['default', 'reload'], () => {
  gulp.watch(`${srcDir}**/*.js`, ['js'])
  gulp.watch(`${srcDir}**/*.css`, ['css'])
  gulp.watch(`${srcDir}**/*.html`, ['html'])
})