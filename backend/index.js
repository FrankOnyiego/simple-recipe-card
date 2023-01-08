import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import crypto from 'crypto';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer'
import session from 'express-session';


const app = express();
const MemoryStore = session.MemoryStore;
app.use(session({
  secret: 'hfWNEFNGMAGHGJHERV',
  resave: false,
  saveUninitialized: true, 
  store: new MemoryStore(),
}));

app.use(express.json());

app.use(cors({  
  origin: ["http://localhost:3000"],
  methods: ["GET","POST"], 
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))

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
        req.session.result = result;
        console.log(req.session);
        res.send(result);
    });
})

app.get('/recipes/:id',(req,res)=>{
  //RETURNS ALL INFORMATION ON CAR DATA
  con.query("SELECT * FROM recipecard WHERE rid = ?",[req.params.id], function (err, result, fields) {
      if (err) throw err;
      res.send(result);
  });
})

app.post('/email', (req, res) => {
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

  const email = req.body.email;
  const sql = "SELECT * FROM users WHERE email = ?";

  con.query(sql,[email], function (err, result, fields) {
    if (err) throw err;
    if(result.length > 0){
        // setup email data
          let mailOptions = {
            from: '"Recipes" <support@myratecardinfo.com', // sender address
            to: `${email}`, // list of receivers
            subject: 'Password Reset', // Subject line
            text: 'Hello World', // plain text body
            html: `Trouble signing in? <br />Resetting your password is easy. <br /><br /><a href="http://localhost:3000/reset/${email}">Reset password</a> <br /><br />If you did not make this request then please ignore this email.` // html body
          };

            // send the email
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
              res.send("Email sent");
          });
    }
});

});

app.post('/register',(req,res)=>{
  const sql = "INSERT INTO users VALUES(NULL,?,?,?)";
  const password_hash = crypto.createHash('md5').update(req.body.password).digest('hex');
  con.query(sql,[req.body.name,req.body.email,password_hash]);
  res.cookie('email', `${req.body.email}`, { maxAge: 86400, httpOnly: false });
  res.send("registration successful");
})

app.post('/login',(req,res)=>{
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  const password_hash = crypto.createHash('md5').update(req.body.password).digest('hex');
  con.query(sql,[req.body.email,password_hash],function(error,result,field){
    if(result.length > 0){
      const email = req.body.email;
      res.cookie('email', `${email}`, {maxAge: 8.64e+7, httpOnly: true});
      res.cookie('user', `${result[0].name}`, {maxAge: 8.64e+7, httpOnly: true});
    }else{
      //no results found
    }
    res.send(result);   
  });
  console.log(req.cookies);
})

app.post('/passwordchange',(req,res)=>{
  const password_hash = crypto.createHash('md5').update(req.body.password).digest('hex');
  const email = req.body.email;
  const sql = "UPDATE `users` SET `password` = ? WHERE email = ?";
  con.query(sql,[password_hash,email],function(error,result,field){
    if(error) throw error;
    res.send(result); 
    console.log(result);
  });
})

app.get('/username',(req,res)=>{
  res.send(req.cookies.user);
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
  });
  res.redirect('/admin'); 
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