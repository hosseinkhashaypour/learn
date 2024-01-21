const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.text());

app.post('/runcode', (req, res) => {
  const code = req.body;
  // Implement code execution logic here
  console.log('Received code:', code);
  res.send('Code executed successfully!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
