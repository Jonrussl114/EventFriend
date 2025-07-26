if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

//Importing libraries that we installed using npm
const express = require("express")
const app = express()
const bcrypt = require("bcrypt") //Imported bcrypt package
const path = require("path")
const passport = require("passport")
const initializePassport = require("./passport-config")
const flash = require("express-flash")
const session = require("express-session")
const methodOverride = require("method-override")
//const { name } = require("ejs")

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

// App configuration
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//app.use(express.urlencoded({encoded: false}))
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, // We wont resave the session variable if nothing is changed
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}))
app.use(passport.initialize()) 
app.use(passport.session())
app.use(methodOverride("_method"))
app.use(express.static('public'))


//Configuring the login post functionality
app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))

//Configuring the register post functionality
app.post("/register", checkNotAuthenticated, async(req, res) => {
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
        console.log(e);
        res.redirect("/register")
    }
})

//Routes that the user can take

//Homepage
app.get('/', checkAuthenticated, (req, res) => {
    res.render("index.ejs", {name: req.user.name})
})

//Login Page
app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render("login.ejs")
})

//Register Page
app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render("register.ejs")
})

// Dashboard Route
app.get('/dashboard', checkAuthenticated, (req, res) => {
  res.render('dashboard/dashboard', { 
        user: req.user, // Changed from req.session.user
        events: [
            { name: "Music Festival", date: "July 20", location: "Central Park" },
            { name: "Tech Conference", date: "July 25", location: "Convention Center" }
        ],
        friends: [
            { name: "Alex", activity: "joined Music Lovers group" },
            { name: "Sam", activity: "is going to Art Exhibition" }
        ] 
    });
});
  
//app.listen(3000)

//End routes
app.delete("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return next(err)
            res.redirect("/")
    })
    
})

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next()
    }
    res.redirect("/login")
}

function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return res.redirect("/")
    }
    next()
}

app.listen(3000)

