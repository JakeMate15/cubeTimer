const bcrypt = require('bcrypt');


function login(req, res) {
    res.render('login/login');
}

function registro(req, res) {
    res.render('login/registro');
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
                            res.redirect('/');
                        });
                    })
                });
            }
        });
    });


    
}

module.exports = {
    login,
    registro,
    alta
};
