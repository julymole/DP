"use strict";

import { paths } from "../gulpfile.babel";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import gulp from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";

const webpackConfig = require("../webpack.config.js"),
    argv = yargs.argv,
    production = !!argv.production;

webpackConfig.mode = production ? "production" : "development";
webpackConfig.devtool = production ? false : "source-map";

gulp.task("scripts", () => {
    return gulp.src(paths.scripts.src)
        .pipe(webpackStream(webpackConfig), webpack)
        .on('error', function (err) {
            console.error('WEBPACK ERROR', err);
            this.emit('end'); // Don't stop the rest of the task
        })
        .pipe(gulpif(production, rename({
            suffix: ".min"
        })))
        .pipe(gulp.dest(paths.scripts.build))
        .pipe(debug({
            "title": "JS files"
        }))
        .on("end", browsersync.reload);
});