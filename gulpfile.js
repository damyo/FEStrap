var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: './build',
		}
	});

gulp.watch('./build/*').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('server'));