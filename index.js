const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(function logRequest (req, res, next) {
    console.log(req.headers);
    console.log(req.body);
    console.log(req.session);
    next();
});

var routes = require('./routes/');
app.use(routes);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));