const path = require('path');
const express = require('express');
const app = express();  // create an express applicaiton
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; 
// if this variable exists that means we are on Heroku and we do want to use the port value, if doesn't exxist, we use default 3000

app.use(express.static(publicPath)); //use public directory to serve up all of our static assets

//match all unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html')); // if the requested isn't in the public folder, just give them back index.html
});

app.listen(3000, () => {    //start up on port 3000
    console.log('Server is up!');
});