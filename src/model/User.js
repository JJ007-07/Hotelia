const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    _id: Number,
    tipodoc: String,
    nombre: String,
    apellido: String,
    fnacimiento: Date,
    genero: String,
    email: {
        Type: String,
        required: true
    },
    telefono: Number,
    paisorigen: String,
    password: String,
    tipouser: String,
    img: String,
    reserva: [{
        type: Schema.Types.ObjectId,
        ref: 'Reserva'
    }]
})


module.exports = model("User", UserSchema);