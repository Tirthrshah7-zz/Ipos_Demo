const gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	cssnano = require('gulp-cssnano'),
	purgecss = require('gulp-purgecss'),
	prefix = require('gulp-autoprefixer'),
	terser = require('gulp-terser'),
	imagemin = require('gulp-imagemin');



// images minify
gulp.task('img_min', function () {
	return gulp.src('src/ipos_images/images_sequenece/new_way/*')
		.pipe(imagemin())
		.pipe(gulp.dest('src/dist/images'))
});

// terser minify
gulp.task('terser_minify', function () {
	return gulp.src('src/js/scrollmagic_Final.js')
		.pipe(terser())
		.pipe(concat("scrollmagic_minify.js"))
		.pipe(gulp.dest('src/js'));
});

// Compile Sass & Inject Into Browser
gulp.task('sass', function () {
	// return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss', 'src/scss/layout/*.scss'])
	// return gulp.src(['src/scss/vendor/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss', 'src/scss/layout/*.scss'])
	return gulp.src(['src/scss/*.scss',])

		// return gulp.src(['src/scss/*.scss', 'src/scss/layout/*.scss'])
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(minifyCSS())
		.pipe(cssnano())
		.pipe(prefix('last 5 versions'))
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.stream());

});

var gulps = require('gulp');
gulp.task('nano', function () {
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss', 'src/scss/layout/*.scss'])
		.pipe(sass())
		.pipe(prefix('last 5 versions'))
		.pipe(cssnano())
		.pipe(concat('mains.css'))
		.pipe(gulps.dest('src/css'));
});

gulp.task('purgecss', () => {
	return gulp.src('src/**/*.css')
		.pipe(purgecss({
			content: ['src/**/*.html']
		}))
		.pipe(gulp.dest('src/css'))
})
// Watch Sass & Server
gulp.task('serve', function () {
	browserSync.init({
		server: "./src"
	});
	gulp.watch(['src/scss/*.scss', 'src/scss/abstract/*.scss', 'src/scss/base/*.scss', 'src/scss/component/*.scss', 'src/scss/layout/*.scss', 'src/scss/pages/*.scss', 'src/scss/vendors/*.scss'], gulp.series('sass'));
	gulp.watch("src/*.html").on('change', browserSync.reload);
	gulp.watch('./src/js/scrollmagic_Final.js', gulp.series('terser_minify'));
});




gulp.task('default', gulp.parallel('sass', 'serve','terser_minify'));


