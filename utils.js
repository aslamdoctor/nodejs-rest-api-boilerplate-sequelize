var path = require('path');

module.exports.timestampFilename = (filename) => {
	var extension = path.extname(filename);
	var nameWithoutExt = filename.split('.').slice(0, -1).join('.');
	var newFileName = `${nameWithoutExt}_${Date.now()}${extension}`;
	return newFileName;
};
