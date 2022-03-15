const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Full pipeline test!'));
=======
app.get('/', (req, res) => res.send('Hello Eddy!!!'));
>>>>>>> 1f3bee9feaad7df2734abc05491c26320a8b28aa

app.listen(port);
console.log(`App running on http://localhost:${port}`);
