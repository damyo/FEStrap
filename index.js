#!/usr/bin/env node

const exec = require('gulp');
const execSh = require('exec-sh');
const fs = require('fs');
const makeDir = require('make-dir');
const prompts = require('prompts');

// const pwd = execSh("pwd");
// const targetPath = process.cwd();

(async function() {
	const questions = [
		{
			type: 'select',
			name: 'style',
			message: `What do you want from 'CSS' or 'SASS'?`,
			choices: [
				{title: 'SASS', value: 'sass'},
				{title: 'CSS', value: 'css'}
			]
		},
		{
			type: 'select',
			name: 'minify',
			message: 'Should the final output be minified?',
			choices: [
				{title: 'No', value: false},
				{title: 'All CSS and Javascript', value: 'all'},
				{title: 'CSS only', value: 'css'},
				{title: 'Javascript only', value: 'js'}
			]
		},
		{
			type: 'number',
			name: 'port',
			message: 'Enter the port number to use.',
			initial: 3000,
			style: 'default',
			min: 1000,
			max: 9999
		}
	];
	const response = await prompts(questions);
	console.log(response.style, response.minify, response.port);
	
	Promise.all([
		makeDir(`src/${response.style}`),
		makeDir('src/js'),
	]).then(path => {
		console.log(`✨📦✨ We make directory => src/${response.style}, src/js`);
	});
})();
