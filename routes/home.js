var router     = require('express').Router();
const AWS      = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient({region: "eu-west-3", credentials: AWS.config.credentials});

dynamodb.get({
    TableName: 'Product',
}, (err, data) => {
    if (!err) {
        console.log(data); //TODO: test/format and put it in chaises var
    } else {
        console.log(err);
    }
});

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