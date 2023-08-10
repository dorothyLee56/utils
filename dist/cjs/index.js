'use strict';

var array = require('./modules/array.js');
var classnames = require('./modules/classnames.js');
var date = require('./modules/date.js');
var is = require('./modules/is.js');
var loadCss = require('./modules/loadCss.js');
var loadScript = require('./modules/loadScript.js');
var perf = require('./modules/perf.js');
var string = require('./modules/string.js');
var url = require('./modules/url.js');



exports.arrUnique = array.arrUnique;
exports.arrayChunk = array.arrayChunk;
exports.classNames = classnames.classNames;
exports.formatDate = date.formatDate;
exports.getEndOfCurrentDay = date.getEndOfCurrentDay;
exports.getEndOfCurrentWeek = date.getEndOfCurrentWeek;
exports.padLeft = date.padLeft;
exports.is_number = is.is_number;
exports.is_object = is.is_object;
exports.loadCss = loadCss.loadCss;
exports.loadScript = loadScript.loadScript;
exports.debounce = perf.debounce;
exports.throttle = perf.throttle;
exports.str_ensure_prefix = string.str_ensure_prefix;
exports.str_ensure_suffix = string.str_ensure_suffix;
exports.urlParamPass = url.urlParamPass;
