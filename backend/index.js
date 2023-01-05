import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import crypto from 'crypto'

import nodemailer from 'nodemailer'

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

app.get('/email', (req, res) => {
  // create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.myratecardinfo.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'support@myratecardinfo.com',
      pass: 'Finalpassword911@'
    }
  });

  // setup email data
  let mailOptions = {
    from: '"Recipes" <support@myratecardinfo.com', // sender address
    to: 'officialfranknyaboga@gmail.com', // list of receivers
    subject: 'Password Reset.', // Subject line
    text: 'Hello World', // plain text body
    html: 'Trouble signing in? <br />Resetting your password is easy. <br /><br /><a href="https://www.google.com">Reset password</a> <br /><br />If you did not make this request then please ignore this email.' // html body
  };

  // send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
      res.send("Email sent");
  });
});

app.post('/register',(req,res)=>{
  const sql = "INSERT INTO users VALUES(NULL,?,?,?)";
  const password_hash = crypto.createHash('md5').update(req.body.password).digest('hex');
  con.query(sql,[req.body.name,req.body.email,password_hash]);

  res.cookie('email', `${req.body.email}`, { maxAge: 86400, httpOnly: true });

  res.send("registration successful");
})

app.post('/login',(req,res)=>{
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  const password_hash = crypto.createHash('md5').update(req.body.password).digest('hex');
  con.query(sql,[req.body.email,password_hash],function(error,result,field){
    res.send(result); 
  });
})

app.post('/addrecipe',(req,res)=>{
  const name = req.body.recipe;
  const ingredient = req.body.ingredients;
  const description = req.body.description;

  const sql = "INSERT INTO recipecard VALUES(NULL,?,?,?)";

  con.query(sql,[name,ingredient,description],function(error,result,field){
    if(error) throw error;
    res.send(result); 
  });

})

app.get('/delete/:id',(req,res)=>{
  const rid = req.params.id;
  console.log(req.params);
  const sql = "DELETE FROM `recipecard` WHERE `recipecard`.`rid` = ?";

  con.query(sql,[rid],function(error,result,field){
    if(error) throw error;
    res.send(result);   
  });
})

app.post('/editrecipe',(req,res)=>{
  const rid = req.body.rid;
  const ingredients = req.body.ingredients;
  const description = req.body.description;

  const sql = "UPDATE `recipecard` SET `ingredients` = ? , `description`= ?  WHERE `recipecard`.`rid` = ?";

  con.query(sql,[ingredients,description,rid],function(error,result,field){
    if(error) throw error;
    console.log(result,"edited");
    res.send(result);   
  }); 
})