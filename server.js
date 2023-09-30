const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'uploads'))); // configure express to use public folder

// Require the upload middleware
const upload = require('./upload');
app.get('/upload',(req,res)=>{
  res.render("index")
})
// Set up a route for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file
  res.json({ message: 'File uploaded successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});