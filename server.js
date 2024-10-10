  
 const express = require('express');
 const ejs = require('ejs');
 const app = express();
 const path = require('path');

 app.set('view engine', 'ejs');
 app.use(express.json());
 app.use(express.urlencoded({extended : false})); 

 app.get('/', (req, res)=>{
     res.render('./pages/index');   
 });  

 app.use(express.static(path.join(__dirname + '/public')));

 app.listen(3000, ()=>{
     console.log('Listening to port 3000');
 });