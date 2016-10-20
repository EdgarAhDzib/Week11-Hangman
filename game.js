var words = require('./options.json');
var wordOpts = words.wordOpts; 
var optsLen = wordOpts.length;
var rand = Math.floor(Math.random()*optsLen);
var currWord = wordOpts[rand].word;
module.exports = currWord;