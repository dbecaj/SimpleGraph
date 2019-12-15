const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const SVG = require('svg.js')

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})