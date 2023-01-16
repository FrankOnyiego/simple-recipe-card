import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import crypto from 'crypto';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer'
import session from 'express-session';
import multer from 'multer';

const app = express();
const MemoryStore = session.MemoryStore;
app.use(session({
  secret: 'hfWNEFNGMAGHGJHERV',
  resave: false,
  saveUninitialized: true, 
  store: new MemoryStore(),
}));

app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

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
            subject: req.body.to ?'REPLY TICKET': 'Password Reset', // Subject line
            text: `${req.body.message}`, // plain text body
            html: req.body.to ?
            `<h7>Your reply to:</h7> <br /> ${req.body.msg } <br /><br /> <div style="background-color:orange; padding:5px;">${req.body.message}</div> <br /><br />If you did not make this request then please ignore this email.` // html body
            :
            `Trouble signing in? <br />Resetting your password is easy. <br /><br /><a href="http://localhost:3000/reset/${email}">Reset password</a> <br /><br />If you did not make this request then please ignore this email.` // html body
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
      res.send(result);  
    }else{
      //no results found
      res.send("0");
    } 
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
  console.log(req.cookies.email,"cookie logout");
  if (req.cookies.email) {
    // Cookie exists
    res.send("1");
  } else {
    // Cookie does not exist
    res.send("0");
  };
})

app.post('/addrecipe',upload.single("file"),(req,res)=>{
  const name = req.body.recipe;
  const ingredient = req.body.ingredients;
  const description = req.body.description;
  const filename = req.file.path;
  const sql = "INSERT INTO recipecard VALUES(NULL,?,?,?,?)";
  con.query(sql,[name,ingredient,description,filename],function(error,result,field){
    if(error) throw error;
      try {
        res.status(200).send("File uploaded successfully");
      } catch (err) {
        console.log(err);
        res.status(500).send("Error uploading file");
      }
      console.log(req.file,"files");
    //res.send(result); 
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
  const description = req.body.preparation;
  const sql = "UPDATE `recipecard` SET `ingredients` = ? , `description`= ?  WHERE `recipecard`.`rid` = ?";
  con.query(sql,[ingredients,description,rid],function(error,result,field){
    if(error) throw error;
    console.log(result,"edited");
    res.send(result);   
  }); 
})

//MESSAGE MANAGEMENT
app.post('/addmessage',(req,res)=>{
  const name= req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const sql = "INSERT INTO messages VALUES(NULL,?,?,?)";
  con.query(sql,[name,email,message],function(error,result,field){
    if(error) throw error;
    console.log(result,"edited");
    res.send(result);   
  }); 
})

app.get('/messages',(req,res)=>{
  //RETURNS ALL INFORMATION ON MESSAGES
  con.query("SELECT * FROM messages", function (err, result, fields) {
      if (err) throw err;
      req.session.result = result;
      console.log(req.session); 
      res.send(result);
  });
})

app.get('/reply/:msid',(req,res)=>{
  //RETURNS ALL INFORMATION ON MESSAGES
  con.query("SELECT * FROM messages WHERE msid = ?",[req.params.msid], function (err, result, fields) {
      if (err) throw err;
      res.send(result);
  });
})

app.get('/messages/:msid',(req,res)=>{
  //RETURNS ALL INFORMATION ON CAR DATA
  con.query("SELECT * FROM messages WHERE msid = ?",[req.params.msid], function (err, result, fields) {
      if (err) throw err;
      res.send(result);
  });
})
//END MESSAGE MANAGEMENT

//USER SETTINGS
app.get('/settings',(req,res)=>{
  con.query("SELECT * FROM settings", function (err, result, fields) {
      if (err) throw err;
      req.session.result = result;
      console.log(req.session); 
      res.send(result);
  });
})

app.post('/updatesettings',(req,res)=>{
  const email = req.body.email;
  const facebook = req.body.facebook;
  const instagram = req.body.instagram;
  const twitter = req.body.twitter;
  const location = req.body.location;
  const mobile = req.body.mobile;
  const name = req.body.name;
  const vision = req.body.vision;

  const sql = "UPDATE `settings` SET `email` = ? , `facebook`= ? , `instagram`= ? , `twitter`= ? , `location`= ? , `telephone`= ? , `cname`= ? , `vision`= ?  WHERE `settings`.`sid` = ?";
  con.query(sql,[email,facebook,instagram,twitter,location,mobile,name,vision,1],function(error,result,field){
    if(error) throw error;
    console.log(result,"edited");
    res.send(result);   
  }); 
})

app.get('/filter/:min/:max/:meal',(req,res)=>{
  const min = req.params.min;
  const max = req.params.max;
  const meal = req.params.meal;

  const sql = `SELECT * FROM recipecard WHERE Title LIKE '%${meal}%' `;

  con.query(sql,[meal],function(error,result,field){
    if(error) throw error;
    console.log(result,sql);
    res.send(result);   
  }); 
})
 
app.all('*',(req,res)=>{
  res.send("page not found");
})