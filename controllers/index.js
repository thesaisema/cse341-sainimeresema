const awesomeFunction = (req, res, next) => {
    res.json('Sainimere Sema');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super Awesome person');
};

module.exports = {awesomeFunction, returnAnotherPerson}