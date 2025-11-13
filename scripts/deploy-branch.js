#!/usr/bin/env node
'use strict';
require('shelljs/global');
var path = require('path');

set('-e');
set('-v');

var branch = process.env.BRANCH_NAME && process.env.BRANCH_NAME.toLowerCase();
console.log(branch);
return;
if (branch && branch !== 'gh-pages') {
	var branchPath = path.join('.tmp', 'preview', branch, '/');
	mkdir('-p', branchPath);
	exec('npm run swagger bundle -- -o ' + branchPath + 'swagger.json');
	cp('web/index.html', branchPath);
	exec('deploy-to-gh-pages --update .tmp');
}
