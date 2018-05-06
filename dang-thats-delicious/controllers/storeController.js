exports.homePage = (req, res) => {
    const person = { name: 'Lady Gaga', dog: 'Ruphus' };
    res.render('index', {person, title: 'Home'});
}