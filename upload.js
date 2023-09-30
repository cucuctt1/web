const fs = require('fs');

const multer = require('multer')

const uploadDirectory = './uploads';

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       
            cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, "img.jpg");
    }
  });

  // Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;