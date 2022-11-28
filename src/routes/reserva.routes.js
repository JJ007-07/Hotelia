const { Router } = require("express");
const rutasReserva = Router();
const ctrReser = require("../controller/reserva.controller");

//rutasReserva.get('/', ctrReser.obtener);
// rutasReserva.get('/:id', ctrReser.obtenerId);
// rutasReserva.post('/', ctrReser.add);
// rutasReserva.put('/:id', ctrReser.edit);

module.exports = rutasReserva;