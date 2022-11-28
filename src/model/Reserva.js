const { Schema, model } = require("mongoose");

const ReservaSchema = new Schema({
    fentrada: Date,
    fsalida: Date,
    cantidadNoches: Number,
    freserva: Date,
    totalReserva: Number,
    user: [{
        type: Schema.Types.Number,
        ref: 'User'
    }],

    habitaciones:[{
        type: Schema.Types.Number,
        ref: 'Habitacion'
    }]
})

module.exports = model("Reserva", ReservaSchema);