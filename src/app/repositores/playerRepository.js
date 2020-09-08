const User = require('../models/userModel');

exports.get = async (skill) => {

    console.log(skill)
    const players = await User.find({ 'skill': skill });
    
    return players;
}