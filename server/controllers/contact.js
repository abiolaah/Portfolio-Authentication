let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the db Schema which is the model
let Contact = require('../models/contact');

//display the contact list
module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else{
            res.render('contact/list', {title: 'Business Contact', ContactList: contactList, displayName:req.user?req.user.displayName:''});
        }
    });
}

module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, contactToEdit) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('contact/update', {title: 'Update Contact',contact: contactToEdit, displayName:req.user?req.user.displayName:''});
        }
    });
}

module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id
    let updatedContact = Contact({
        "_id": id,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "phone": req.body.phone,
        "email": req.body.email
    });
    Contact.updateOne({_id: id}, updatedContact,(err) =>{
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    });
}