const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('/01-Activities/')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); // uses 'public' folder's contents

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});

/* 
1. (done) Create a homepage & make sure it loads locally
2. (done) Create an Atlas account
3. (done) write down Atlas's password
4. (done) set IP address to 0.0.0.0/0
5. (done) get connection string from Atlas
6. Set up project on Heroku
7. Connect to GitHub repo where project is stored
8. Add a config var called MONGODB_URI and give it the connection string

*/