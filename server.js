if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

//Importing libraries that we installed using npm
const express = require("express")
const app = express()
const bcrypt = require("bcrypt") //Imported bcrypt package
const passport = require("passport")
const initializePassport = require("./passport-config")
const flash = require("express-flash")
const session = require("express-session")

initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)
/**
 * const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''

})
 */

const users = []


app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, //We won't resave the session variable if nothing is changed
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//Configuring the login post functionality
app.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true
}))

//Configuring the register post functionality
app.post("/register", async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        console.log(users); //Display newly registered users in the console
        res.redirect("/login")
    } catch (e) {
        res.redirect("/register")
    }
})

//Routes that the user can take
//Homepage
app.get('/home', (req, res) => {
    res.render("home.ejs")
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