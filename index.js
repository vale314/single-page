const express = require('express');
const path = require('path');
const router = new express.Router();
const app = express();

app.use(express.static('./dist'));

router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./dist/index.html'));
})

app.use('/',router);

app.listen(3000,'192.168.1.76',()=>{
    console.log("Server Is Running");
})