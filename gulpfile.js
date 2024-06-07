var gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  browserify = require('browserify'),
  uglify = require('gulp-uglify'),
  babelify = require('babelify'),
  glslify = require('glslify'),
  connect = require('gulp-connect');

// Babelify 구성 설정
const babelConfig = {
  presets: ['@babel/preset-env']
};

function compileJS(file) {
  return browserify('src/' + file + '.js', { debug: true })
    .transform(babelify.configure(babelConfig))
    .transform(glslify)
    .bundle()
    .on('error', function (err) {
      console.log('Error : ' + err.message);
    })
    .pipe(source(file + '.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('demo/js'))
    .pipe(connect.reload());
}

gulp.task('js1', function (done) {
  compileJS('index');
  done();
});

gulp.task('js2', function (done) {
  compileJS('index2');
  done();
});

gulp.task('js3', function (done) {
  compileJS('index3');
  done();
});

gulp.task('connect', function () {
  connect.server({
    root: 'demo',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', gulp.series('js1', 'js2', 'js3'));
});

gulp.task('default', gulp.series(gulp.parallel('js1', 'js2', 'js3'), gulp.parallel('connect', 'watch')));
