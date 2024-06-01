const express = require("express");

const clientRoute = express.Router();
const clientController = require("../controller/api_clients.controller");
const { autenticarJWT } = require("../middlewares/JWT");

clientRoute.get("/", autenticarJWT, clientController.getallClientes);
clientRoute.post("/", autenticarJWT, clientController.createCliente);
clientRoute.get('/details/:id',autenticarJWT, clientController.getCliente);
clientRoute.put('/:id',autenticarJWT, clientController.updateCliente);

module.exports = clientRoute;
