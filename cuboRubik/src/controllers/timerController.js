function timer(req, res) {
    if(req.session.loggedin == true){
        res.render('app/timer', {
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
module.exports = {
    timer,
    estadisticas,
    perfil,
    ajustes,
};