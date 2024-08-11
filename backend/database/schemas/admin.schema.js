const mongoose = require('mongoose');
const {Schema}=mongoose

const AdminSchema = new Schema({
    _id:{
        type:Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;