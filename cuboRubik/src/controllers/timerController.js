const mysql = require('mysql');

function timer(req, res) {
    if (req.session.loggedin == true) {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: 3306,
            database: 'timer'
        });

        connection.connect((err) => {
            if (err) {
                console.error('Error de conexión a la base de datos:', err);
                return;
            }

            const userId = req.session.idUsr; 
            const query = `SELECT nombreSesion FROM sesion WHERE idUsuario = ${userId}`;
            connection.query(query, (err, sessions) => {
                if (err) {
                    console.error('Error al ejecutar la consulta:', err);
                    return;
                }

                res.render('app/timer', {
                    layout: 'main-auth',
                    nombre: req.session.nombre,
                    idUsr: req.session.idUsr,
                    btn: req.session.btn,
                    txt: req.session.txt,
                    fondo: req.session.fondo,
                    contenedores: req.session.contenedores,
                    sessions: sessions 
                });

                connection.end(); 
            });
        });
    } else {
        res.render('login/login');
    }
}

function estadisticas(req,res){
    if(req.session.loggedin == true){
        res.render('app/estadisticas', {
            layout:         'main-auth', 
            nombre:         req.session.nombre,  
            idUsr:          req.session.idUsr,
            btn:            req.session.btn,
            txt:            req.session.txt,
            fondo:          req.session.fondo,
            contenedores:   req.session.contenedores,
        });
    }
    else{
        res.render('login/login');
    }

    
}


function perfil(req,res){
    if(req.session.loggedin == true){
        res.render('app/perfil',    
            {
                layout:         'main-auth', 
                nombre:         req.session.nombre,  
                idUsr:          req.session.idUsr,
                btn:            req.session.btn,
                txt:            req.session.txt,
                fondo:          req.session.fondo,
                contenedores:   req.session.contenedores,
            }
            
        );
    }
    else{
        res.render('login/login');
    }
}

function ajustes(req,res){
    if(req.session.loggedin == true){
        res.render('app/conf',    
            {
                layout:         'main-auth', 
                nombre:         req.session.nombre,  
                idUsr:          req.session.idUsr,
                btn:            req.session.btn,
                txt:            req.session.txt,
                fondo:          req.session.fondo,
                contenedores:   req.session.contenedores,
            }
            
        );
    }
    else{
        res.render('login/login');
    }


}


function crearSesion(req, res) {
    const { sesion } = req.body;

    // Guardar la nueva sesión en la base de datos
    // Puedes utilizar la conexión a la base de datos y ejecutar la consulta correspondiente

    // Envía una respuesta indicando que la nueva sesión se ha creado correctamente
    res.status(200).send("Nueva sesión creada exitosamente");
}

module.exports = {
    timer,
    estadisticas,
    perfil,
    ajustes,
    crearSesion
};