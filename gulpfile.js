/*********************************************************************
 * Config Gulp project by Thiago Hata
 * You can use the following forms
 *
 * $ gulp
 * -> execut task default
 *    The gulp execute concat scripts and css, minify scripts, css files and html files,
 *    optimized images. Ideal when a project does not have a backend.
 *
 * $ gulp server
 * -> Create serverhost  (localhost:3000) using browser-sync
 *   The gulp watch sass, css and js, watch syntax css and javascript
 *   and refresh browser automatically with new features css and js.
 *
 * * $ gulp deploy
 * -> When the project has a backend and you can not deliver the htmls minify
 *
 *********************************************************************/


/* Import modules */
var gulp          = require('gulp')
   ,imagemin      = require('gulp-imagemin')
   ,clean         = require('gulp-clean')
   ,uglify        = require('gulp-uglify')
   ,usemin        = require('gulp-usemin')
   ,cssmin        = require('gulp-cssmin')
   ,browserSync   = require('browser-sync').create()
   ,jshint        = require('gulp-jshint')
   ,jshintStylish = require('jshint-stylish')
   ,csslint       = require('gulp-csslint')
   ,autoprefixer  = require('gulp-autoprefixer')
   ,sass          = require('gulp-sass')
   ,sourceMap     = require('gulp-sourcemaps')
   ,htmlmin       = require('gulp-htmlmin')
   ,notify        = require('gulp-notify');


//Shortcut path
var files = {
   app: "./app/",
   dist:"./dist/"
};


/*********************************************************************
*   Taks Default
**********************************************************************/


gulp.task('default', ['copyFilesDist'], function(){

   /* Task cleanFilesDist it depends on the implementation of other tasks(concatMinify and optimazeImages)
    * so these tasks are performed in the task cleanFilesDist
    */
    gulp.start('cleanFilesDist', 'minifyHtml');

});


/*********************************************************************
*   Taks Deploy
**********************************************************************/

gulp.task('deploy', ['copyFilesDist'], function(){

   /* Task cleanFilesDist it depends on the implementation of other tasks(concatMinify and optimazeImages)
    * so these tasks are performed in the task cleanFilesDist
    */
    gulp.start('cleanFilesDist');

});


/*********************************************************************
*   Taks Clean Folder dist
**********************************************************************/

//Files not needed for the folder dist
var filesDelete = [
                 './dist/js/**/*.js'
                ,'./dist/css/**/*.css'
                ,'!./dist/js/**/*.min.js'
                ,'!./dist/css/**/*.min.css'
                ];

gulp.task('cleanAllDist', function(){
   return gulp.src(files.dist)
         .pipe(clean({force: true}));
});

gulp.task('cleanFilesDist', ['concatMinify', 'optimazeImages'], function(){
   return gulp.src(filesDelete)
         .pipe(clean());
});

/*********************************************************************
*   Taks Copy Files
**********************************************************************/

gulp.task('copyFilesDist', ['cleanAllDist'], function(){
   return gulp.src([files.app + '**/*', '!' + files.app + 'sass'])
      .pipe(gulp.dest(files.dist));
});

/*********************************************************************
*  Task Concat, Minify and autoprefixer css
**********************************************************************/

gulp.task('concatMinify', function(){
   return gulp.src(files.dist +'**/*.{html,htm,shtml,shtm,xhtml,php,jsp,asp,aspx,erb,ctp}')
         .pipe(usemin({
            'js' : [uglify],
            'css' : [autoprefixer, cssmin]
         }))
         .pipe(gulp.dest(files.dist))
         .pipe(notify({ message: 'Scripts and css concatenated and minify'}));

});


gulp.task('minifyHtml', ['concatMinify', 'optimazeImages'], function() {
  return gulp.src(files.dist +'**/*.html')
    .pipe(htmlmin({
         removeComments: true,
         removeCommentsFromCDATA: true,
         removeCDATASectionsFromCDATA: true,
         collapseWhitespace: true,
         conservativeCollapse: true,
         preserveLineBreaks: true
      }))
    .pipe(gulp.dest(files.dist))
});

/*********************************************************************
*   Task Optimaze images
**********************************************************************/

gulp.task('optimazeImages', function(){
   return gulp.src(files.dist + 'images/**/*')
         .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
         .pipe(gulp.dest(files.dist + 'images'))
         .pipe(notify({ message: 'Optimized images' }));
});

/*********************************************************************
*   SASS
**********************************************************************/

gulp.task('sass', function() {
    return gulp.src([files.app +  'sass/**/*.scss', files.app +  'sass/**/*.sass' ])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(files.app + 'css'))
        .pipe(browserSync.stream());
});

/*********************************************************************
*   Task Server
**********************************************************************/

gulp.task('server', ['sass'], function(){
   browserSync.init({
      server: {
         baseDir: files.app,
         routes : {
            "/bower_components": "bower_components"
         }
      }
   });
   gulp.watch(files.app +'js/**/*.js').on('change', function(event){
      gulp.src(event.path)
         .pipe(jshint())
         .pipe(jshint.reporter(jshintStylish));
   });
   //CSS LINT DISABLE
   // gulp.watch(files.app +'css/**/*.css').on('change', function(event){
   //    gulp.src(event.path)
   //       .pipe(csslint())
   //       .pipe(csslint.reporter());
   // });
    gulp.watch([files.app +  'sass/**/*.scss', files.app +  'sass/**/*.sass'], ['sass']);
    gulp.watch(files.app + '**/*').on('change', browserSync.reload);
});







