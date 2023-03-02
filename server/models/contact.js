//model/contact.js (stores the schema of the business contact db)Oluwapelumi Ajuwon-301254275, Feb 23rd, 2023*/
let mongoose = require('mongoose');
let contactsModel = mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: String
},
    {
        collection: "contact"
});

module.exports = mongoose.model('contact', contactsModel);