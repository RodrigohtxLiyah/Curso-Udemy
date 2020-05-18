const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat"); // concatena os arquivos; exemplo os .js tudo em um arquivo só
const uglify = require("gulp-uglify"); // Plugin utilizado para minificação de arquivos
const babel = require("gulp-babel");

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js') // vai pegar tudo que esta na pasta src que seja .js
    .pipe(babel({
        comments: false,
        presets: ["env"] // vai converter tudo que é de mais moderno no JS atual e converte para um versão mais antiga ou o mais compatível com o Browser
    }))
    .pipe(uglify())
    .on('error', err => console.log(err))
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build')) // para qual pasta vai
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)