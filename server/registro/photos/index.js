
const Photos = require('mongoose').model('Photos');


function Nuevo(data){
    const newPhoto = new Photos(data);
    
    return new Promise((resolve,reject)=>{
      newPhoto.save((error)=>{
        if(error){
          return resolve(a=error.code);
        }
        console.log('Save');
        return resolve (a=0)
      })
    })
    
    
}


module.exports.Nuevo=Nuevo;