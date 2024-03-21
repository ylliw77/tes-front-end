const { Item, Provider } = require("../models/index");

class ItemController {
  static async getAllItem(req, res, next) {
    try {
      const response = await Item.findAll({
        include : [Provider]
      });
      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  static async getItemById(req, res, next) {
    try {
      const { id } = req.params;
      const selectedItem = await Item.findByPK(id, {
        include : [Provider]
      })
      if(!selectedItem || !id){
        throw { name: "NOT_FOUND" };
      }
      res.json(selectedItem)
    } catch (err) {
      next(err);
    }
  }
}
module.exports = ItemController