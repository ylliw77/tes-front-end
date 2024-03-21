const { Provider } = require("../models/provider");

class ProviderController {
  static async getAllProvider(req, res, next) {
    try {
      const response = await Provider.findAll();
      res.json(response);
    } catch (err) {
      next(err);
    }
  }
  static async newProvider(req, res, next) {
    try {
      const { name } = req.body;
      const response = await Provider.create(name);
      res.json({
        message: `New provider with id : ${response.id} successfully created.`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProviderController;
