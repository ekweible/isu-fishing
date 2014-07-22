var browserify = require('browserify'),
    gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    react = require('gulp-react'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream');

gulp.task('browserify', ['js-stage', 'jsx'], function() {
    return browserify({entries: './build/src/js/app.js'})
        .bundle({debug: true})
        .pipe(source('app.js'))
        .pipe(gulp.dest('./static/app/js'));
});

gulp.task('js-stage', function() {
//    return gulp.src('./src/js/**/*.js')
//        .pipe(gulp.dest('./build/src/js/'));
});

gulp.task('jsx', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(react())
        .pipe(gulp.dest('./build/src/js/'));
});

gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./static/app/css/'));
});

gulp.task('stage-assets', function() {
    gulp.src('./images/**')
        .pipe(gulp.dest('./static/images/'));
    gulp.src('./node_modules/jquery/dist/jquery*.js')
        .pipe(gulp.dest('./static/jquery'));
    gulp.src('./node_modules/typeahead.js/dist/typeahead.bundle*js')
        .pipe(gulp.dest('./static/typeahead'));
    gulp.src('./node_modules/bootstrap/dist/**/*')
        .pipe(gulp.dest('./static/bootstrap'));
});

gulp.task('serve', function() {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname));
    app.listen(4000);
});

gulp.task('dev', ['browserify', 'sass', 'stage-assets', 'serve'], function() {
    livereload.listen();
    gulp.watch('./src/js/**/*.js', ['browserify']);
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./static/app/css/**/*.css').on('changed', livereload.changed);
});

gulp.task('default', ['dev']);