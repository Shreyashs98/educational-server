const mongoose = require( 'mongoose' );

const materialSchema = new mongoose.Schema({
    // name: String
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    startTime: {
        hours: {
            type: Number,
            required: true,
            min: 0,
            max: 23
        },
        minutes: {
            type: Number,
            default: 0,
            min: 0,
            max: 59
        }
    },
    endTime: {
        hours: {
            type: Number,
            required: true,
            min: 0,
            max: 23
        },
        minutes: {
            type: Number,
            default: 0,
            min: 0,
            max: 59
        }
    },
    linktodownload: {
        type: String,
        required: false
       
    },
    category: {
        type: String,
        enum: [ 'frontend', 'backend', 'database', 'language', 'data science', 'aiml' ]
    },
    imageUrl: String
});

// creates a class called 'material'
// a MongoDB collection called "materials" will be created later
mongoose.model( 'Material', materialSchema );