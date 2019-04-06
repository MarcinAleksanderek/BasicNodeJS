
var os = require('os');
var colors = require('colors');
var formatTime = require('./formatTime');

function getOSinfo () {
	var type = os.type();
	var release = os.release();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();

	console.log(colors.grey('System:'), type);
	console.log(colors.red('Release:'), release);
	console.log(colors.magenta('CPU model:'), cpu);
	formatTime.format(uptime);
	console.log(colors.yellow('User name:'), userInfo.username);
	console.log(colors.white('Home dir:'), userInfo.homedir);
}

exports.print = getOSinfo;