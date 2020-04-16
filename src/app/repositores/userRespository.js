const User = require('../models/userModel');

exports.create = async (data) => {

    const user = await User.create(data);

    return user;
}