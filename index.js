const express = require('express');
const path = require('path');
const router = new express.Router();
const app = express();
const MobileDetect = require('mobile-detect');
const fs = require("fs")
const http = require("https")
const url = require("url")
const bodyParser = require('body-parser');
const config = require('./config/index.json');
const passport = require('passport');


require('./server/models/index').connect(config.dbUri);

app.use(bodyParser.json());

const Ingreso =require('./server/registro/admin/ingreso');
 Ingreso.Nuevo();


 app.use(passport.initialize());
 const localLoginStrategy = require('./server/passport/local-login');
 passport.use('local-login', localLoginStrategy);










router.get('/mobile',(req,res)=>{
    md = new MobileDetect(req.headers['user-agent']);
    if( JSON.stringify(md.phone())  != 'null' || JSON.stringify(md.mobile()) !='null' ){
        return res.json({mobile:true}).end();
    }
    return res.json({mobile:false}).end();

})

router.get('/video',(req,res)=>{
    const path = './server/assets/rafa.mp4'

      const file = fs.createReadStream(path)
      const head = {
        'Accept-Ranges': 'bytes',
        'Content-Type': 'video/mp4',
      }
  
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)

})




router.post('/login', (req, res, next) => {

  
    return passport.authenticate('local-login', (err, token, userData) => {
      if (err) {
        if (err.name === 'IncorrectCredentialsError') {
          return res.status(400).json({
            success: false,
            message: err.message
          });
        }
  
        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });
      }
  
  
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        token,
        user: userData,
        status:200
      });
    })(req, res, next);
  });





router.post('/find',(req,res)=>{
    console.log(req.body);
    res.status(200).json({status:'Fyes'}).end();
})

router.post('/delete',(req,res)=>{
    console.log(req.body);
    res.status(200).json({status:'Dyes'}).end();
})

router.post('/add',(req,res)=>{
    console.log(req.body);
    res.status(200).json({status:'Ayes'}).end();
})




router.get('*',(req,res)=>{
  
    res.sendFile(path.join(__dirname,'./dist/index.html'));
})

app.use(express.static('./dist'));
app.use('/',router);

app.listen(3005,'192.168.1.76' ,()=>{
    console.log("Server Is Running");
})