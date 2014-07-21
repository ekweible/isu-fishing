var browserify = require('browserify'),
    gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    react = require('gulp-react'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    webserver = require('gulp-webserver');

gulp.task('browserify', ['js-stage', 'jsx'], function() {
    return browserify({'entries': './build/src/js/app.js'})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./static/app/js'));
});

gulp.task('js-stage', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./build/src/js/'));
});

gulp.task('jsx', function() {
    return gulp.src('./src/js/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./build/src/js/'));
});

gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./static/app/css/'));
});

gulp.task('stage-dependencies', function() {
    gulp.src('./node_modules/bootstrap/dist/**/*')
        .pipe(gulp.dest('./static/bootstrap/'));
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            fallback: 'index.html'
        }));
});

gulp.task('dev', ['browserify', 'sass', 'stage-dependencies', 'webserver'], function() {
    livereload.listen();
    gulp.watch(['./src/js/**/*.js', './src/js/**/*.jsx'], ['browserify']);
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./static/app/css/**/*.css').on('changed', livereload.changed);
});

gulp.task('default', ['dev']);