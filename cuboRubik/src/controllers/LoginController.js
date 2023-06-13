function login(req, res) {
    res.render('login/login');
}

function registro(req, res) {
    res.render('login/registro');
}

module.exports = {
    login: login,
    registro: registro
};
