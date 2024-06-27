   
// Require the Mongoose package
const mongoose = require('mongoose');

// Create a schema to define the properties of the items collection
const RSVPSchema = new mongoose.Schema({
    Location_Type:{type:String, required: true},
    Name: { type: String, required: true },
    City: {type: String, required:false},
    Fish: [String],
    Fish_Caught:{type:Number, required:false},
    Picture:{type: String}, 
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('RSVP', RSVPSchema);
