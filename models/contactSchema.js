const mongoose = require("mongoose")
 const contactSchema = mongoose.Schema(
{
 
    name:String
 
    email:{type: String, require:true},
    password:{type: String, require:true},
    adress: String

}

 )
 
const contact = mongoose.model('contact', contactSchema)
module.exports= contact