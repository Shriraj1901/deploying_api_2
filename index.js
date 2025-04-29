const express = require('express');
const { resolve } = require('path');
require('dotenv').config(); // Load environment variables

const app = express();
const port = 3010;

// Serve static files from the 'static' directory
app.use(express.static('static'));

// Root route with environment-based logic
app.get('/', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true';

  if (isAdmin) {
    res.sendFile(resolve(__dirname, 'pages/admin.html'));
  } else {
    res.sendFile(resolve(__dirname, 'pages/user.html'));
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});