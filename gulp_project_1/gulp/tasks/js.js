import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import rename from 'gulp-rename';

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
        .pipe(concat('main.js')) // об'єднати в один файл
        .pipe(babel()) // транспіляція ES6 -> ES5
        .pipe(app.gulp.dest(app.path.build.js)) // зберегти звичайну версію
        .pipe(uglify()) // мініфікувати
        .pipe(rename({ suffix: '.min' })) // .min.js
        .pipe(app.gulp.dest(app.path.build.js, { sourcemaps: '.' }))
        .pipe(app.plugins.browsersync.stream());
};