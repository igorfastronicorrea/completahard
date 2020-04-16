const User = require('../../models/userModel');
const repository = require('../../repositores/userRespository');

exports.post = async (req, res) => {

    const email = req.body.email;

    if (await User.findOne({ email }))
        return res.status(400).send({ error: 'User already exists' });


    try {
        var data = await repository.create(req.body);
        res.status(200).send({ data });
    } catch (err) {
        res.status(500).send({ "message": "erro" });
    }
}