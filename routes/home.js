let router     = require('express').Router();
let http = require('http');
const AWS      = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient({region: "eu-west-3", credentials: credentials});

let products;
let productsFromApi;
let ApiProductsCallOptions = {
    host: process.env.BACK_END_URL,
    port: 80,
    path: '/api/products',
    method: 'GET'
};

router.get('/', function (req, res) {
    dynamodb.scan({
        TableName: 'Product',
    }, (err, data) => {
        if (!err) {
            products = data.Items;
            res.render('home', {'products': products});
        } else {
            console.log(err);
        }
    });
});

router.get('/from-api', function (req, res) {
    http.get(ApiProductsCallOptions, function(response) {
        let body = '';

        response.on('data', function (chunk) {
            body+=chunk;
        });

        response.on('end', function(){
            productsFromApi = JSON.parse(body).data;
            res.render('home', {'products': productsFromApi});
        })
    }).on('error', function(err){
        console.log(err);
    });
});

module.exports = router;