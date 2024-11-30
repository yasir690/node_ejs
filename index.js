const express = require('express');
const app = express();
const port=3000;
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route to render a page using EJS
app.get('/', (req, res) => {
    const data = { title: 'EJS Server-Side Rendering', user: 'John' };
    res.render('../view/index', data);  // Render the 'index.ejs' template
  });

app.listen(port, () => {
    console.log(`server is running at ${port}`);
  });
