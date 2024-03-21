const { Item, User, Provider, Transaction } = require("../models/index");

class TransactionController {
  static async newTransaction(req, res, next) {
    try {
      const { id } = req.params;
        const {phoneNumber} = req.body
      const selectedItem = await Item.findByPk(id);
      if (!selectedItem) {
        throw { name: "NOT_FOUND" };
      }
      const response = await Transaction.create({
        itemId: selectedItem.id,
        userId: req.user.id,
        status: false,
        phoneNumber
      });
      res.status(201).json({
        message: `Success create transaction with id : ${response.id}`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAllTransaction(req, res, next) {
    try {
      const response = await Transaction.findAll({
        where: {
          userId: req.user.id,
        },
      });
      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  static async removeTransaction(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Transaction.destroy({
        where: { id },
      });
      if (!response || !id) {
        throw { name: "NOT_FOUND" };
      }
      res.json({
        message: "Transaction has been deleted.",
      });
    } catch (err) {
      next(err);
    }
  }

  static async updatePayment(req, res, next) {
    try {
      const { id } = req.params;

      const response = await Transaction.update(
        {
          status: true,
        },
        { where: { id }, returning: true }
      );
      if (!response) {
        throw { name: "NOT_FOUND" };
      }
      res.json({
        message: "Your payment has been updated.    ",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TransactionController
