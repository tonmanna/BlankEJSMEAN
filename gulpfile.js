var gulp = require('gulp');
var exec = require('child_process').exec;
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var fs = require('fs');

gulp.task('default',['mongoexpress','nodemon','watchclient'], function() {
});

gulp.task('mongoexpress',function(cb){

    var path = "node_modules/mongo-express/config.js";
    if (!fs.existsSync(path)) {
        fs.createReadStream('node_modules/mongo-express/config.default.js').pipe(fs.createWriteStream('node_modules/mongo-express/config.js'));
    }
    exec('node app.js',
        {
            cwd: 'node_modules/mongo-express'
        }, function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
        cb(err);
    });
    console.log("Mongo-Express : http://localhost:8081 user: admin / pass: pass");
})


gulp.task('nodemon',function(){
    livereload.listen(35729);
    nodemon({ script: 'app.js'
        , ignore: ['gulpfile.js','*.ejs' ,'public/**/*']
    })
        .on('restart', function () {
            setTimeout(function(){
                console.log("Reloaded!!");
                gulp.src('views/index.ejs').pipe(livereload());
            },1000);
        })
});

// Auto Reload Configuration
gulp.task('watchclient', function() {
    gulp.watch('public/views/**/*',function(){
        console.log("RELOAD Views");
        gulp.src('views/index.ejs').pipe(livereload());
    });

    gulp.watch('public/js/**/*',function(){
        console.log("RELOAD JS");
        gulp.src('views/index.ejs').pipe(livereload());
    });

    gulp.watch('public/css/*.css', function(){
        console.log("RELOAD CSS");
        gulp.src('views/index.ejs').pipe(livereload());

    });

    gulp.watch('views/**/*',function(){
        console.log("RELOAD EJS Views");
        gulp.src('views/index.ejs').pipe(livereload());
    });
});
