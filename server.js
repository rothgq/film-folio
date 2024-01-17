const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const gsap = require('gsap');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//Define a route to render the homepage
app.get('/', (req, res) => {
    

     res.render('homepage', {
        pageTitle: 'Film Folio',
       headerTitle: 'Film Folio',
        navLinks: [
            { link: '#', label: 'Home' },
            { link: '#', label: 'About Us' },
             { link: '#', label: 'Sign In' }
        ],
       genreButtons: [
           { name: 'Action', link: 'Action.html' },
            { name: 'Comedy', link: 'Comedy.html' },
           { name: 'Drama', link: 'Drama.html' },
           { name: 'Sci-Fi', link: 'Sci-Fi.html' },
            { name: 'Thriller', link: 'Thriller.html' },
            { name: 'Romance', link: 'Romance.html' }
       ]
   });
 });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Added by Noah to authenticate login or not
app.get('/', (req, res) => {
  res.render('main', { isLoggedIn: req.isAuthenticated() });
});

// Start the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening!'));
  });