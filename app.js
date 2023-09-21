const express = require('express');
const path = require('path')
const app = express();

app.use(express.urlencoded());
app.set('views',__dirname+'/views')
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','hbs')
let link
app.get('/', function(request, response, next){
    response.render('index.hbs',{message:link})

});

app.post('/', function(request, response, next){
    let {first_name} = request.body;
    link = first_name
    response.redirect('/')

});

app.listen(2000);