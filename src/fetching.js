const express = require('express');
const nano = require('nano')('http://localhost:5984/dalmia');

const app = express();
const mydatabase = nano.db.use('dalmia');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  mydatabase.view('mydesign', 'myview', (err, body) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
      return;
    }
    const products = body.rows.map(row => row.value);
    res.render('index', { products });
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});