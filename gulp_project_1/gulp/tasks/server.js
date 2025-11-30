export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}` // папка dist
        },
        notify: false, // вимкнути сповіщення
        port: 3000, // порт
        open: true // автоматично відкривати браузер
    });
    done();
}