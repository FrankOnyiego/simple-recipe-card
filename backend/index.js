import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000,()=>{
    console.log("listening on port 5000");
})

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recipes"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/',(req,res)=>{
    res.json("Hello world");
})

app.get('/recipes',(req,res)=>{
    //RETURNS ALL INFORMATION ON CAR DATA
    con.query("SELECT * FROM recipecard", function (err, result, fields) {
        if (err) throw err;
        console.log(result);

        res.send(result);
    });
})

app.get('/recipes/:id',(req,res)=>{
  //RETURNS ALL INFORMATION ON CAR DATA
  con.query("SELECT * FROM recipecard WHERE rid = ?",[req.params.id], function (err, result, fields) {
      if (err) throw err;
      console.log(result);

      res.send(result);
  });
})
