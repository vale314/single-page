const jwt = require('jsonwebtoken');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');

const Admin = require('mongoose').model('Admins');





module.exports = new PassportLocalStrategy({
  //exportamos un new PassportLocalStrategy
  usernameField: 'email',
  //le decimos que el campo username es igual al email
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  //tenemos la pet el email el password y done
  const userData = {
    //en la constante userData el email es igual al email sin espacios
    email: email.trim(),
    password: password.trim()
  };
                       //si user no tiene nada una constante es igual a un nuevo valor que es igual  a un error que nos manada un mensaje
                       return Admin.findOne({ email: userData.email }, (err, admin) => {
                        if (err) { return done(err); }
                        //si hauy un error nos retorne un usuario

                        if (!admin) {
                          //si user no tiene nada una constante es igual a un nuevo valor que es igual  a un error que nos manada un mensaje
                          const error = new Error('Incorrect email or password');
                          error.name = 'IncorrectCredentialsError';
                          //el error en el campo name es igual a nombre del error que es  IncorrectCredentialsError
                          console.log("No enontrado");
                          return done(error);
                          //y nos retorna  error con el tipo y msj y el nombre
                        }
                        // return company.comparePassword(userData.password, (passwordErr, isMatch) => {
                        //   //si hay un error made el error
                        //     if (err) { return done(err); }
                        //     //si no se encontro que se mande que es es diferente la contraseña
                        //     if (!isMatch) {
                        //       const error = new Error('Incorrect email or password');
                        //       error.name = 'IncorrectCredentialsError';
                        //       //se crea una constante error y es igual a un error con el mensaje
                        //       //y error en el nombre en el campo nombre
                        //       return done(error);
                        //     }
                        return admin.comparePassword(userData.password, (passwordErr, isMatch) => {
                          //si hay un error made el error
                            if (passwordErr) { return done(passwordErr); }
                            //si no se encontro que se mande que es es diferente la contraseña
                            if (!isMatch) {
                              const error = new Error('Incorrect email or password');
                              error.name = 'IncorrectCredentialsError';
                              //se crea una constante error y es igual a un error con el mensaje
                              //y error en el nombre en el campo nombre
                              console.log("No password")
                              return done(error);
                            }
                            //tenemos una constante llamada payload que es igual a el user manadado en el findOne y el sub ees igual a la id
                          const payload = {
                            sub: admin._id
                          };

                          //tenemos una constante lalmada token que es igual  a iniciar de jwt le pasamos el payload y de config le mandamos la pal.
                          const token = jwt.sign(payload, config.jwtSecret);
                          //tenemos una constante data que tiene a nombre del usuario que se encontro por la funcion
                          const data = {
                          name: admin.name,
                          types: 'use',
                        };
                        console.log(token)
                        //retornamos con el done le decimos que fianlizamos en local-login mandamos el token getInternalInstanceReadyForUpdate
                        //y el dato que es el nombre del usuario encontrado
                      return done(null, token, data);
                    });
                  });
});