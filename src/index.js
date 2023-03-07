require( './db/init.js' ); // the file executes and connects to the DB

const express = require( 'express' );
const materialsRouter = require( './routes/materials.route' );
const cors = require( 'cors' );

const app = express();

// middleware (router is also a middleware) - function that gets called on each request
// express.json() is a middleware which will read the request body, and if it finds JSON data, it will set that data on req.body
// should be before all other middleware
app.use( cors() );
app.use( express.json() );
app.use( materialsRouter );

app.listen( 3000, () => {
    console.log( 'check http://localhost:3000' );
})