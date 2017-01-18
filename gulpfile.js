var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');

var doIfProduction = function (task) {
	return gutil.env.env === 'prod' ? task() : gutil.noop();
};

gulp.task('styles', function () {
	gulp.src('src/**/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(doIfProduction(cssmin))
		.pipe(doIfProduction(rename({suffix: '.min'})))
		.pipe(gulp.dest('./dist'));
});