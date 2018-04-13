
const Photos = require('mongoose').model('Photos');
const search = require('./search')

function deleteP(id){

    return new Promise((resolve,reject)=>{
        search.search(id).then((a)=>{
            if(a==0)
                return resolve(1)
            
            
        
        Photos.remove({id:id }, (err)=> {
            if (!err) {
                    return resolve (0)
            }
            else {
                    return resolve (err)
            }
        });
     })
    })      
}


module.exports.deleteP=deleteP;