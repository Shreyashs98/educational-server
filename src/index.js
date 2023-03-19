require( './db/init.js' ); 

const express = require( 'express' );
const materialsRouter = require( './routes/materials.route' );
const cors = require( 'cors' );

const app = express();
app.use( cors() );
app.use( express.json() );
app.use( materialsRouter );

app.listen( 3000, () => {
    console.log( 'check http://localhost:3000' );
})