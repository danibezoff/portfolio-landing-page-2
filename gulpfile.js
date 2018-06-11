const gulp = require('gulp')

const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies']
})

var browserSync = $.browserSync.create()

gulp.task('init', function () {
  return gulp.src('*.js', {read: false})
    .pipe($.shell([
      'mkdir -p  src/css src/fonts src/images src/js src/sass',
      'touch src/index.html'
    ]))
})

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass')
    .pipe($.sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
})

gulp.task('useref', function () {
  return gulp.src('src/**/*.html')
    .pipe($.useref())
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.if('*.css', $.autoprefixer()))
    .pipe(gulp.dest('dist'))
})

gulp.task('images', function () {
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
    .pipe($.cache($.imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
})

gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*.+(ttf|eot|woff|woff2)')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', function () {
  return $.del.sync('dist');
})

gulp.task('build', function (callback) {
  $.runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})

gulp.task('default', ['browserSync', 'sass'], function () {
  gulp.watch('src/sass/**/*.sass', ['sass'])
  gulp.watch('src/**/*.html', browserSync.reload)
  gulp.watch('src/js/**/*.js', browserSync.reload)
})
