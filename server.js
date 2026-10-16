const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // This generates live data on the fly every single time someone visits!
    const currentTime = new Date().toLocaleTimeString();

    res.send(`
    <h1>Dynamic Node.js Backend!</h1>
    <p>This page was generated live by the server at: <strong>${currentTime}</strong></p>
  `);
});

app.listen(port, () => {
    console.log(`Server is actively running on port ${port}`);
});