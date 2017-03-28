'use strict'

const express = require('express');
const app = express();

app.set('view engine', 'pug');


let bakeryGoods = [
  {"name": "cinnamon roll", "price": 3.95},
  {"name": "french bread", "price": 7.95},
  {"name": "blueberry muffin", "price": 1.95},
  {"name": "dinner rolls (dozen)", "price": 10.95},
  {"name": "herbed scone", "price": 2.95}
];


app.get('/', (req, res, next)=>{
  res.render('index', {thisPage: "home"})
})

app.get('/inventory', (req, res, next)=>{
  res.render('inventory', {bakeryGoods, thisPage: "inventory"})
})

app.get('/about', (req, res, next)=>{
  res.render('about', {thisPage: "about"})
})


const port = process.env.PORT || 3000

app.listen(port, ()=>{
  console.log(`listening on ${port}`)
});
