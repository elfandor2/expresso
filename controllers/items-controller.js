const { Sequelize, DataTypes, Model } = require('sequelize');

class ItemsController extends Model {
    getItems(req, res, next) {
        return res.status(200).json({
            message: 'success get items',
            data: [
                {
                    "item_id": 1,
                    "item_name": "botol kecap",
                },
                {
                    "item_id": 2,
                    "item_name": "botol saus",
                }
            ]
        })
    }

    postItem (req, res, next) {
    console.log(req.body);
    return res.status(200).json({
        message: 'success post items',
    })
    }
}

module.exports = {
    ItemsController
}