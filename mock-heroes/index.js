const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/getHeroes', (req, res) => {
    console.log('Request Made');
 let heroes = [
     { id: 1, name: 'Batman', home: 'Gotham' },
     { id: 2, name: 'Superman', home: 'Metropolis' },
     { id: 3, name: 'Wonder Woman', home: 'Themyscira' },
     { id: 4, name: 'Flash', home: 'Central City' },
     { id: 5, name: 'Green Lantern', home: 'Coast City' }
 ];
 res.json(heroes);
});

app.post('/addHero', (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));