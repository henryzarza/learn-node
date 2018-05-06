exports.myMiddleware = (req, res, next) => {
    req.name = 'Beyoncé';
    next();
}

exports.homePage = (req, res) => {
    const person = { name: req.name, dog: 'Ruphus' };
    res.render('index', {person, title: 'Home'});
}