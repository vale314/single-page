const Admins = require('mongoose').model('Admins');

function Nuevo(){
      const userData = {
        email: "nungaray@hotmail.com",
        password: "12345",
        name: "nungaray"
      };
       const newUser = new Admins(userData);

      newUser.save((error)=>{
        if(error){
          return (error);
        }
        console.log('restaurado');
      });
}

module.exports.Nuevo=Nuevo;