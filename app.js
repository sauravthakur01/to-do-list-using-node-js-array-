const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/" , function(req , res){

let day = date();
  res.render("list" , {listTitle : day , listOfItem : items  })
});

app.post("/" , function(req , res ){
   let item = req.body.first;

if(req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work");
}else{
  items.push(item);
  res.redirect("/");
}

});

app.get("/work" , function(req , res){
  res.render("list" , {listTitle : "Work List" , listOfItem : workItems });
});

app.get("/about" , function(req , res){
  res.render("about");
});


app.listen(320 , function(){
  console.log("its running");
})
