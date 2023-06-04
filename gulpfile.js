let preprocessor = 'sass';
const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagecomp = require('compress-images');
const del = require('del');
const fileinclude = require('gulp-file-include');
const svgstore = require('gulp-svgstore');
const inject = require('gulp-inject');

function browsersync() {
  browserSync.init({
    server: { baseDir: 'app/' },
    notify: false,
    online: true,
    browser: 'chrome',
  })
}

function includeHTML() {
  return src(['app/pages/*.html', '!app/components/**/*.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(dest('app'))
}

function styles() {
  return src(
      'app/assets/style/main.scss',
  )
      .pipe(eval(preprocessor)())
      .pipe(concat('main.css'))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        grid: true
      }))
      .pipe(cleancss({
        level: { 1: { specialComments: 0 } },
        format: 'beautify'
      }))
      .pipe(dest('app/assets/style/'))
      .pipe(browserSync.stream())
}

async function images() {
  imagecomp(
      "app/assets/images/src/**/*",
      "app/assets/images/dest/", {
        compress_force: false,
        statistic: true,
        autoupdate: true
      }, false, {
        jpg: {
          engine: "mozjpeg",
          command: ["-quality", "90"]
        }
      }, {
        png: {
          engine: "pngquant",
          command: ["--quality=20-50", "-o"]
        }
      }, {
        svg: {
          engine: 'svgo',
          command: false
        }
      }, {
        gif: {
          engine: false,
          command: false
        }
      },
      function (err, completed) {
        if (completed === true) {
          browserSync.reload()
        }
      }
  )
}

function cleanimg() {
  return del('app/assets/images/dest/**/*', { force: true })
}

function buildcopy() {
  return src([
    'app/assets/style/**/*.css',
    'app/assets/style/fonts/**/*',
    'app/assets/js/**/*.js',
    'app/assets/images/dest/**/*',
    'app/assets/plugins/**/*',
    'app/**/*.html',
  ], { base: 'app' })
      .pipe(dest('dist'))
}

function cleandist() {
  return del('dist/**/*', { force: true })
}

function startwatch() {
  watch(['app/**/*.js', '!app/**/*.min.js']);
  watch('app/assets/style/**/*.scss', styles);
  watch('app/**/*.html').on('change', includeHTML);
  // watch('app/*.html').on('change', injectSVG);
  watch('app/**/*.html').on('change', browserSync.reload);
  watch('app/assets/images/src/**/*', images);
  // watch('app/assets/images/icons/sprites/*.svg', generateSVG)
}

function generateSVG() {
  return src("app/assets/images/icons/sprites/*.svg")
      .pipe(svgstore())
      .pipe(dest("app/assets/images/icons/"));
}

// function injectSVG() {
//   	const svgs = src("app/assets/images/icons/sprites.svg");

// 	return src("app/*.html")
//     .pipe(
//       inject(svgs, {
//         transform: (filePath, file) => {
//           // return file contents as string
//           return file.contents.toString();
//         },
//       })
//     )
//     .pipe(dest("app/"));
// }

// exports.generateSVG = generateSVG;

// exports.injectSVG = injectSVG;

exports.browsersync = browsersync;

exports.styles = styles;

exports.images = images;

exports.cleanimg = cleanimg;

exports.build = series(cleandist, styles, images, includeHTML, buildcopy); //injectSVG generateSVG

exports.default = parallel(styles, includeHTML, browsersync, startwatch); // injectSVG generateSVG