const fsPromises = require('fs').promises;
const path = require('path');

const files = [
	'dist',
	'404.html',
	'index.html',
	'about',
	'archives',
	'articles',
	'categories',
];

async function deleteFile(filePath) {
	const stat = await fsPromises.lstat(filePath);
	if(stat.isDirectory()) {
		const files = await fsPromises.readdir(filePath);
		for(const file of files) {
			await deleteFile(path.resolve(filePath, file));
		}
		await fsPromises.rmdir(filePath);
	}
	else {
		await fsPromises.unlink(filePath);
	}
}

(async () => {
	for(const file of files) {
		const filePath = path.resolve(__dirname, `../${file}`);

		try {
			await deleteFile(filePath);
		}
		catch(err) {
			if(err.code === 'ENOENT') {
				continue;
			}
			throw err;
		}
	}
})();
