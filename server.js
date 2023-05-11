const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for your HTML page
app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, 'public', 'index.html');
  
    // Read the HTML file dynamically from the file system
    fs.readFile(htmlPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).end();
        return;
      }
  
      // Send the HTML file as the response
      res.send(data);
    });
  });

// Route to dynamically serve the input.js file
app.get('/input.js', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'input.js');

  // Read the input.js file dynamically from the file system
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).end();
      return;
    }

    // Set the content type and send the file data
    res.set('Content-Type', 'application/javascript');
    res.send(data);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});