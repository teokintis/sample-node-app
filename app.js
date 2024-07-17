const express = require('express');
const cors = require('cors');
const app = express();
const port = 22;

// Use the CORS middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API endpoint!' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
