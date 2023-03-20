const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  // name: String
  name: {
    type: String,
  },

  linktodownload: {
    type: String,
  },

  imageUrl: String,
});

// creates a class called 'material'
// a MongoDB collection called "materials" will be created later
mongoose.model("Material", materialSchema);
