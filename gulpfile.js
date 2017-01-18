var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');

var doIfProduction = function (task) {
	return gutil.env.env === 'prod' ? task() : gutil.noop();
};

gulp.task('img-compress', function () {
    gulp.src('src/static/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/static/img'));
});

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

gulp.task('build', function () {
	gulp.watch('./src/**/*.css', ['styles']);
});
