'use strict';

const gulp = require("gulp");
const typescript = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const mocha = require("gulp-mocha");
const del = require("del");

let tsProject = typescript.createProject('tsconfig.json');

gulp.task('default', ['test']);

gulp.task('clean', (callback) => {
    del(['lib/**/*.js', 'lib/**/*.js.map']).then(() => {
        callback();
    }).catch(e => {
        callback(e);
    })
});

gulp.task('build', ['clean'], () => {
    return gulp.src(['lib/**/*.ts', 'typings/main.d.ts'], {base: '.'})
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'));
});

gulp.task('build-tests', ['build'], () => {
    return gulp.src(['test/**/*.ts', 'typings/main.d.ts'], {base: '.'})
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'));
});

gulp.task('test', ['build-tests'], () => {
    return gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});