const app = require('./app');

app.listen(procces.env.PORT || 3000, function () {
    console.log("Express escuchando en el puerto", this.address().port, app.settings.env)
})