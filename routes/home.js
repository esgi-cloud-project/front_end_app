var router = require('express').Router();

// tmp mock
let chaises = {
    '0': {
        'name': 'Chaise de bureau design',
        'price': '99,99€',
        'description': 'Cette chaise ira à ravir avec notre bureau de marbre.',
        'grade': '4'
    },
    '1': {
        'name': 'Chaise de bureau design',
        'price': '99,99€',
        'description': 'Cette chaise ira à ravir avec notre bureau de marbre.',
        'grade': '4'
    },
    '2': {
        'name': 'Chaise de bureau design',
        'price': '99,99€',
        'description': 'Cette chaise ira à ravir avec notre bureau de marbre.',
        'grade': '4'
    },
    '3': {
        'name': 'Chaise de bureau design',
        'price': '99,99€',
        'description': 'Cette chaise ira à ravir avec notre bureau de marbre.',
        'grade': '4'
    },
    '4': {
        'name': 'Chaise de bureau design',
        'price': '99,99€',
        'description': 'Cette chaise ira à ravir avec notre bureau de marbre.',
        'grade': '4'
    },
    '5': {
        'name': 'Chaise de bureau design',
        'price': '99,99€',
        'description': 'Cette chaise ira à ravir avec notre bureau de marbre.',
        'grade': '4'
    }
};

router.get('/', function (req, res) {
    res.render('home', {'chaises': chaises});
});

module.exports = router;