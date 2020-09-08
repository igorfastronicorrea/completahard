'use strict';

exports.listAllCategories = (req, res, next) => {

    const categories = [{
        id: 1,
        title: 'Silver I'
    }, {
        id: 2,
        title: 'Gold 4'
    }]

    res.status(200).send({ categories: categories });
};