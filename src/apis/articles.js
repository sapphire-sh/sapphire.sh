'use strict';

import fs from 'fs';
import path from 'path';

import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
	res.json([]);
});

router.get('/list', (req, res) => {
	fs.readdir(path.resolve(__dirname, '../../articles'), (err, files) => {
		if(err) {
			console.error(err);
			res.json(err);
		}
		else {
			res.json(files);
		}
	});
});

router.get('/:filename', (req, res) => {
	fs.readFile(path.resolve(__dirname, '../../articles', req.params.filename), 'utf8', (err, data) => {
		if(err) {
			console.error(err);
			res.json(err);
		}
		else {
			res.json(data);
		}
	})
});

export default router;
