const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Success! This is a live, dynamic Node.js Backend!</h1>');
});

app.listen(port, () => {
    console.log(`Server is actively running on port ${port}`);
});