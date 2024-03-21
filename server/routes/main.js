const ItemController = require("../controllers/ItemController");
const ProviderController = require("../controllers/ProviderController");
const TransactionController = require("../controllers/TransactionController");
const { verificationUser } = require("../middlewares/authentication");

const route = require("express").Router();

route.get("/items", ItemController.getAllItem);
route.get("/providers", ProviderController.getAllProvider);
route.get("items/:id", ItemController.getItemById)
route.use(verificationUser);
route.get("/transactions", TransactionController.getAllTransaction);
route.post("/transactions", TransactionController.newTransaction);
route.patch("/transactions/payment", TransactionController.updatePayment);
route.delete("/transactions/:id", TransactionController.removeTransaction);
module.exports = route;
