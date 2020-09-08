'use strict';
const repository = require('../../repositores/playerRepository');


exports.listPlayers = async (req, res, next) => {

    try {
        const playersList = await repository.get(req.params.id)
        res.status(200).send({ players: playersList });
    } catch (err) {
        res.status(500).send({ error: 'error' });
    }
};