const express = require('express');
const path = require('path')
const app = express();
const fs = require('fs');
app.use(express.urlencoded());
app.set('views',__dirname+'/views')
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','hbs')
let link
fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    link =data;
  });
app.get('/', function(request, response, next){
    response.render('index.hbs',{message:link})

});

app.post('/', function(request, response, next){
    let {first_name} = request.body;
    link = first_name
    fs.writeFile('./data.txt', link, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
    response.redirect('/')

});

app.listen(2000);