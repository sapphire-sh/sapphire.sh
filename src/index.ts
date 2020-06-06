import Express from 'express';

const app = Express();

app.use('*', (req, res) => {
	res.send('hello');
});

app.listen(4101, () => {
	console.log(`http://localhost:${4101}`);
});
