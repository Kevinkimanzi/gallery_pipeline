const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Export the app
module.exports = app;

// Listen on a port
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
}
