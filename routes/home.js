var router     = require('express').Router();
const AWS      = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient({region: "eu-west-3", credentials: AWS.config.credentials});

let products;

dynamodb.scan({
    TableName: 'Product',
}, (err, data) => {
    if (!err) {
         products = data.Items;
    } else {
        console.log(err);
    }
});

router.get('/', function (req, res) {
    res.render('home', {'products': products});
});

module.exports = router;