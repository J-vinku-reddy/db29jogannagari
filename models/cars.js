const mongoose = require("mongoose") 
const carsSchema = mongoose.Schema({ 
 cName: String, 
 cSize: Number, 
 cCost: Number 
}) 
 
module.exports = mongoose.model("cars", 
carsSchema) 