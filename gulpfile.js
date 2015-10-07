var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
	connect = require('gulp-connect'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-minify-css'),
  sourcemaps = require('gulp-sourcemaps'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant')
  ;


gulp.task('html', function () {
  gulp.src('./**/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return sass('src/scss/main.scss')
  .on('error', function (err) {
    console.log(err.message);
  })
  .pipe(gulp.dest('src/css/'))
  .pipe(connect.reload());
});


gulp.task('js', function () {
  gulp.src('./src/js/**/*.js')
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch(['./**/*.html'], ['html']);
  gulp.watch(['./src/scss/**/*.scss'], ['sass']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
});

gulp.task('connect', function () {
	connect.server({
		port: 1337,
		livereload: true
	});
});

gulp.task('compress', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});



gulp.task('minify-css', function () {
  return gulp.src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});


gulp.task('imagemin', function () {
    return gulp.src('src/img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/img'));
});
//
//gulp.task('minify-html', function() {
//  var opts = {
//    conditionals: true,
//    spare: true
//  };
// 
//  return gulp.src('public/templates/*.html')
//    .pipe(minifyHTML(opts))
//    .pipe(gulp.dest('public/dist/templates'));
//});

gulp.task('default', ['connect', 'watch']);
gulp.task('uglify', ['compress', 'minify-css', 'imagemin'/*, 'minify-html'*/]);