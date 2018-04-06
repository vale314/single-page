const express = require('express');
const path = require('path');
const router = new express.Router();
const app = express();
const MobileDetect = require('mobile-detect');
const fs = require("fs")
const http = require("https")
const url = require("url")

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
router.get('*',(req,res)=>{
  
    res.sendFile(path.join(__dirname,'./dist/index.html'));
})

app.use(express.static('./dist'));
app.use('/',router);

app.listen(3001,'192.168.1.76' ,()=>{
    console.log("Server Is Running");
})