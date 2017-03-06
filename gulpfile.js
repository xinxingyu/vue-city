const gulp = require('gulp')
const vueify = require('gulp-vueify')
const less = require('gulp-less')
const babel = require('gulp-babel')
const execSync = require('child_process').execSync
const merge2 = require('merge2');

execSync('rm -rf lib')
execSync('mkdir -p ./lib/assets')
execSync('cp -r ./src/assets/. ./lib/assets')

gulp.task('compile', function () {
    const tsCss = gulp.src('src/components/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./lib/components'))
    const tsVue = gulp.src('src/components/**/*.vue')
        .pipe(vueify())
        .pipe(gulp.dest('./lib/components'))
    const tsJs = gulp.src('src/components/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./lib/components'))
    return merge2([tsVue, tsCss, tsJs])
});
