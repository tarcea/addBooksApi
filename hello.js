const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, from E X P R E S S, mai animalelor...');
});

app.listen(port, () => console.log(`Hello app listening on port ${port}!`))
