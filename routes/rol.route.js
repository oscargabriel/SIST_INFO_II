const express = require("express");

const rolRoute = express.Router();
const rolController = require("../controller/rol.controller");
const { autenticarJWT } = require("../middlewares/JWT");

rolRoute.get("/", autenticarJWT, rolController.getallRol);
rolRoute.post("/", autenticarJWT, rolController.createRol);
rolRoute.get('/details/:id',autenticarJWT, rolController.getRol);
rolRoute.put('/:id',autenticarJWT, rolController.updateRol);

module.exports = rolRoute;
