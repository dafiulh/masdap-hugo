const fs = require('fs');
const path = require('path');
const glob = require('glob');
const gm = require('gray-matter');

let input = 'content/posts/**';
let output = 'static/index.json';
let list = [];

function readDir(path) {
	let files = glob.sync(path);
    let len = files.length;
    
	for (let i = 0; i < len; i++) {
		let stats = fs.lstatSync(files[i]);
		if (!stats.isDirectory()) readFile(files[i]);
    }
    
  	return true;
}

function readFile(filePath) {
    let ext = path.extname(filePath);
    let meta = gm.read(filePath);

	if (meta.data.draft === true) return;
    
    let matter = {}

    matter.url = path.basename(filePath).replace(ext, '');
    if (meta.data.slug != undefined) matter.url = meta.data.slug;
    if (meta.data.title != undefined) matter.title = meta.data.title;
    if (meta.data.image != undefined) matter.image = meta.data.image;
    if (meta.data.type != undefined) matter.type = meta.data.type;

	list.push(matter);
}

let stream = fs.createWriteStream(output);
readDir(input);
stream.write(JSON.stringify(list, null, 4));
stream.end();