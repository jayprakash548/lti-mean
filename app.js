const express = require('express');
const chalk = require('chalk');
const path = require('path');
const app = express();

//use are middlewhere here to serve the static page
app.use(express.static(path.join(__dirname, '/public/')));

//Set use to set the variable and from where views are coming
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log("Hello Express !!");
  res.send("Hello Express!!");
})

app.listen(3000, () => {

  // using concat
  // console.log("Port running on: " + chalk.blueBright("http://localhost:3000"));

  //Using Template literals
  console.log(`Port running on: ${chalk.blueBright("http://localhost:3000")}`);
})