const express = require('express');
const app = express();
const port = 5000;
const categories = require('./data/categories.json');
const cors = require('cors');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const checkNews = news.find(n => n._id === id);
    res.send(checkNews)
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news/category/:id', (req, res) => {
    const id = req.params.id;
    if(id == 0){
        res.send(news)
    }

    const checkId = news.filter(data => data.category_id === id);
    res.send(checkId);
})

app.listen(port , () => {
    console.log(`Example app listening on port ${port}`);
})