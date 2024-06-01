const express = require("express");

const empleadoRoute = express.Router();
const empleadoController = require("../controller/empleado.controller");
const { autenticarJWT } = require("../middlewares/JWT");

empleadoRoute.get("/", autenticarJWT, empleadoController.getallEmpleado);
empleadoRoute.post("/", autenticarJWT, empleadoController.createEmpleado);
empleadoRoute.get('/details/:id',autenticarJWT, empleadoController.getEmpleado);
empleadoRoute.put('/:id',autenticarJWT, empleadoController.updateEmpleado);

module.exports = empleadoRoute;
