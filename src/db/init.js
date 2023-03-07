// register our models
require( '../models/material' );

const { dbConnectionStr } = require( '../../config' );

const mongoose = require( 'mongoose' );

const connect = async () => {
    await mongoose.connect( dbConnectionStr );
    console.log( 'connected to the cluster' );
};

connect();