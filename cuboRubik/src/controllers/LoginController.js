const bcrypt = require('bcrypt');


function login(req, res) {
    if(req.session.loggedin == true){
        res.redirect('/');
    }
    else{
        res.render('login/login');
    }
}

function iniciarSesion(req, res){
    const data = req.body;
    
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM usuario WHERE correo = ?',[data.correo],(err,userdata) => {
            if(userdata.length > 0){
                userdata.forEach(element =>{
                    bcrypt.compare(data.pass, element.pass, (err,isMatch) => {
                        if(!isMatch){
                            res.render('login/login', {error: 'Credenciales no válidas'});
                        }
                        else{
                            //console.log(element);
                            req.session.loggedin = true;
                            req.session.nombre = element.Nombre;
                            req.session.idUsr = element.idUsuario;
                            req.session.btn = element.colorBoton;
                            req.session.txt = element.colorTexto;
                            req.session.fondo = element.colorFondo;
                            req.session.contenedores = element.colorContenedores;
                            res.redirect('/');
                        }
                    });
                });
            }
            else{
                res.render('login/login', {error: 'Credenciales no válidas'});
            }
        });
    });
}

function registro(req, res) {
    if(req.session.loggedin == true){
        res.redirect('/');
    }
    else{
        res.render('login/registro');
    }
}

function alta(req,res){
    const data = req.body;

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuario WHERE correo = ?', [data.correo],(err,userdata)=>{
            if(userdata.length > 0){
                res.render('login/registro', {error: 'El correo ya ha sido registrado!'});
            }
            else{
                bcrypt.hash(data.pass,12).then(hash=>{
                    data.pass = hash;
                    data.colorBoton = '#000000';
                    data.colorTexto = '#000000';
                    data.colorFondo = '#000000';
                    data.colorContenedores = '#000000';
            
                    req.getConnection((err,conn)=>{
                        conn.query('INSERT INTO usuario SET ?', [data], (err,rows)=>{
                            req.session

                            res.redirect('/');
                        });
                    })
                });
            }
        });
    });


    
}


function cerrarSesion(req,res){
    if(req.session.loggedin == true){
        req.session.destroy();
        res.redirect('/login');
    }
    else{
        res.redirect('/login');
    }
}



module.exports = {
    login,
    iniciarSesion,
    registro,
    alta,
    cerrarSesion
};
