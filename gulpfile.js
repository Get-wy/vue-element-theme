/*
 * @Author: WangYu
 * @Date: 2019-12-24 18:18:10
 * @LastEditors  : WangYu
 * @LastEditTime : 2019-12-25 11:25:53
 */
var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var cssWrap = require('gulp-css-wrap')
gulp.task('css-wrap', function () {
    return gulp.src(path.resolve('./theme/index.css'))
    /* 找需要添加命名空间的css文件，支持正则表达式 */
        .pipe(cssWrap({
            selector: '.custom-2D8B3E' /* 添加的命名空间 */
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/assets/css/theme/2D8B3E')) /* 存放的目录 */
})