## read large file with node.js

```js
return new Promise((resolve, reject) => {
	const stream = fs.createReadStream(filePath);
	const chunks: Buffer[] = [];
	stream.on('data', (chunk) => {
		chunks.push(chunk);
	});
	stream.on('close', () => {
		resolve(Buffer.concat(chunks).toString());
	});
	stream.on('error', (error) => {
		reject(error);
	});
});
```
