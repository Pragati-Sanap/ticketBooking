var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseTimestamp = require("mongoose-timestamp");

var ticket = new Schema({
    seats:Number,
    price:String,
});
ticket.plugin(mongooseTimestamp);
mongoose.model('ticket', ticket);
module.exports = mongoose.model('ticket',ticket);