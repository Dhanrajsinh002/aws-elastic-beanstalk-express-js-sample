const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello There! This is a sample app for Continuos Delivery Pipeline using AWS. Now we arre testing Whether the Pipeline working perfectly or not.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
