const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: (true, 'Name is required please input name')
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: (true, 'email is required'),
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default : 'active',
        required: false
    },
    admin:{
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('user', UserSchema);