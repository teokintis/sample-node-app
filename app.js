const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Use the CORS middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API endpoint!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
