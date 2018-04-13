
const Photos = require('mongoose').model('Photos');


function showAll(data){
   
    
    return new Promise((resolve,reject)=>{
        
        Photos.find({},(err,photos)=>{
            if(err)
                return resolve(0)
                
            return resolve(photos)    
        })
    })
    
    
}


module.exports.showAll=showAll;