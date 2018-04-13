
const Photos = require('mongoose').model('Photos');


function search(id){
   return  new Promise((resolve,reject)=>{
       Photos.findOne({id:id},(err,photo)=>{
            if(err)
                return resolve(0)
            if(photo)
                return resolve(photo)
            return resolve(0)

       })
   })
}


module.exports.search=search;