


const express = require('express');
const fs = require('fs')
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var expressLayout = require('express-ejs-layouts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(cors()); 
app.use(expressLayout);
app.use(express.static('public'));
require('./config/db');


var human_resource_manager = require("./router/human_resource_manager");
app.use('/human_resource_manager',human_resource_manager);



const apiConfig = fs.readFileSync("./AutocodegenApiDocConfig.json");
const apiConfigJson = JSON.parse(apiConfig);


app.get("/api-docs",(req,res)=>{
  res.render('home',{ title:"AutoCodeGen API Docs",layout : 'layout', apiConfigJson : apiConfigJson});
  });


app.get("/",(req,res)=>{

    res.send("no code app is running");
  });

  const port = 8080;
  
  app.listen(port, () => 
{
    console.log('Running on port ' + port);
});

module.exports = app;