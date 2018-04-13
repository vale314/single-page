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

const addPhotos = require('./server/registro/photos/index.js')
const deletePhoto = require('./server/registro/photos/delete')
const searchPhoto = require('./server/registro/photos/search')
const showAll = require('./server/registro/photos/showAll')
app.use(bodyParser.json());

const Ingreso =require('./server/registro/admin/ingreso');
 Ingreso.Nuevo();


 app.use(passport.initialize());
 const localLoginStrategy = require('./server/passport/local-login');
 passport.use('local-login', localLoginStrategy);




 const authCheckMiddlewareAdm = require('./server/middleware/admin');
 app.use('/admin', authCheckMiddlewareAdm);

router.get('/admin',(req,res)=>{
  return res.status(200).json({status:200}).end()
})



router.get('/mobile',(req,res)=>{
    md = new MobileDetect(req.headers['user-agent']);
    if( JSON.stringify(md.phone())  != 'null' || JSON.stringify(md.mobile()) !='null' ){
        return res.json({mobile:true}).end();
    }
    return res.json({mobile:false}).end();

})

router.get('/video',(req,res)=>{
     console.log("E")
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
    searchPhoto.search(req.body.id).then((a)=>{
      if(!a)
        return res.status(400).json({error:'Not Find or Error'}).end()
      return res.status(200).json(a).end();  
    })
})

router.post('/delete',(req,res)=>{
    deletePhoto.deleteP(req.body.id).then((a)=>{
      if(a==0)
        return res.status(200).json({status:'yes'}).end();
      return res.status(400).json(a).end();
    })

})

router.get('/showall',(req,res)=>{
  showAll.showAll().then((a)=>{
    if(a==0)
      return res.status(400).json({error:'Errror Or Null'}).end();
    return res.status(200).json(a).end();
  })

})


router.post('/add',(req,res)=>{   
      addPhotos.Nuevo(req.body).then((a)=>{
        if(!a)
          return res.status(200).json({status:'Ayes'}).end();
        if(a == 11000)
          return res.status(400).json({error:"Code Index Duplicate"}).end();

        return res.status(400).json({errors:"Code Index Duplicate"}).end();
      })
    })




router.get('*',(req,res)=>{
  
    res.sendFile(path.join(__dirname,'./dist/index.html'));
})

app.use(express.static('./dist'));
app.use('/',router);

app.listen(5000,'192.168.1.76' ,()=>{
    console.log("Server Is Running");
})