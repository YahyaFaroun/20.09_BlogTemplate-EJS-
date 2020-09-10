//Express
const express = require('express')
const app = express()
//Json Datei
const blogsData = require('./blogsData.json')
const randomBlogsData = require('./blogsData.json').slice(2, 8)
// console.log(randomBlogsData);
const PORT = process.env.PORT || 4000

//Form Daten speichern
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Form
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Public Ordner nutzen
app.use(express.static('public'))
//EJS Engine
app.set('view engine', 'ejs')
//Server
app.listen(4000, () => {
    console.log('listening at 4000');
})

//Routing
app.get('/', (req, res) => {
    res.render('index', { blogsData: blogsData, activeNav: "/" })
})
app.get('/newArticle', (req, res) => {
    res.render('newArticle', { blogsData: blogsData, activeNav: "/newArticle", randomBlogsData: randomBlogsData })
})
app.get('/blog/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    res.render('singleArticle', { article: blogsData[req.params.id], activeNav: "/Blog", randomBlogsData: randomBlogsData })
})

//Form




//404
app.use((req, res) => {
    res.render('404', { activeNav: "/Error" })
})