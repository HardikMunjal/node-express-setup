const express = require('express');
var myLogModule = require('./Log.js');

myLogModule.warning('Node.js started');
myLogModule.info('Info coming from local modules');

const app = express();

app.use('/', (req, res, next) => {
  console.log('**** This will run for all the request pro *****');


  console.log(req.headers.origin)
   
  if(req.headers.host == '192.168.1.40:3000'){
    res.send('<h1>Your IP is not allowed</h1>')
  }

  //myLogModule.warning('Node.js started');
  next();
});



// app.get('/', (req, res, next) => {
//     console.log('This always runs!');
//     myLogModule.warning('Node.js started');
//     next();
// });

app.post('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.json({name:'hardik'});
});


app.get('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Nodemon Showcase </h1>');
});

app.get('/view-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>View Block Request</h1>');
});

app.put('/employee', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>From put Api</h1>');
});

app.listen(3000);

console.log('Node.js web server at port 3000 is running..')
