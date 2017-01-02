'use strict';

import Express from 'express';

const router = Express.Router();

import articles from './articles';

router.get('/', (req, res) => {
	res.json([]);
});

router.use('/articles', articles);

export default router;
