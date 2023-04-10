
const express = require('express')
const app = express()
app.get('', (req, res) => {res.send('Hello first!')})
app.get('/hello', (req, res) => {res.send('Hello World!')})
app.listen(4000)
// console.log('Hello World!');