var common = require('../common')
var path = require('path');
// var open = require("open");
// open("http://www.baidu.com");
exports.problem = common.problem(path.resolve(__dirname, 'problem.md'))
exports.solution = common.problem(path.resolve(__dirname, 'solution.md'))
exports.verify = common.verify
