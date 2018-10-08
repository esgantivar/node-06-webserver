const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

const PATH_TO_TEMPLATES = './templates';
nunjucks.configure(PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
});

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.send('Hello World')
    const response = {
        name: 'Sneyder',
        age: 27,
        url: req.url
    }
    res.send(response);
})

app.get('/home', (req, res) => {
    const data = {
        firstName: 'Sneyder',
        lastName: 'Gantiva'
    };
    return res.render('index.html', data);
});

app.get('/test', (req, res) => {
    const data = {
        firstName: 'Edwin',
        lastName: 'Ramos'
    };
    var food = {
        'ketchup': '5 tbsp',
        'mustard': '1 tbsp',
        'pickle': '0 tbsp'
    };
    data['food'] = food;
    data['foo'] = [1, 2, 3, 4, 5]
    return res.render('test.njk', data);
});

app.listen(3000, () => {
    console.log('Listening port 3000')
});