exports.myMiddleware = (req, res, next) => {
    req.name = 'Beyoncé';
    next();
}

exports.homePage = (req, res) => {
    res.render('index', {name: req.name, title: 'Home'});
}