//******************************************************************************
//* clean.js
//*
//* Defines a custom gulp task for removing all output files that were 
//* autogenerated by other gulp tasks 
//******************************************************************************

var gulp = require("gulp"),
    del = require('del');

gulp.task('clean', (done) => {

    var directories = [
        "./build",
        "./dist",
        "./debugging",
        "./testing",
    ];
    
    del(directories).then(() => done()).catch(e => done(e));
});