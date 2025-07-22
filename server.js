//Importing libraries that we installed using npm
const express = require("express")
const app = express()

//Routes that the user can take
//Homepage
app.get('/', (req, res) => {
    res.render("index.ejs")
})

//Login Page
app.get('/login', (req, res) => {
    res.render("login.ejs")
})

//Register Page
app.get('/register', (req, res) => {
    res.render("register.ejs")
})

app.listen(3000)