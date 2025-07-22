//Importing libraries that we installed using npm
const express = require("express")
const app = express()
const bcrypt = require("bcrypt") //Imported bcrypt package
const path = require("path")
/**
 * const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''

})
 */

const users = []

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({encoded: false}))

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

// Dashboard Route
app.get('/dashboard', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  
  // Sample data - replace with real data later
  res.render('dashboard/dashboard', {
    user: req.session.user,
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
app.listen(3000)
