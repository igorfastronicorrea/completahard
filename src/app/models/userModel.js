const mongoose = require('../database');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    steamid: {
        type: String
    },
    picture: {
        type: String
    },
    password: {
        type: String,
        require: true
    },
    skill: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    }
})

UserSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;

    next();
});

const user = mongoose.model('user', UserSchema, 'user');

module.exports = user;