const mongoose = require("mongoose");
const connectiondb = async () => {
    const url = `mongodb+srv://${process.env.User}:${process.env.Password}@cluster0.4rupeff.mongodb.net/${process.env.DBName}?retryWrites=true&w=majority`;
    try {
        const DBName = await mongoose.connect(url)
        console.log("Conexión satisfactoria", DB.connection.name)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectiondb;