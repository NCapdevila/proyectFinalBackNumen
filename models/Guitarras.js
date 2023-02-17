const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    marca:{
        type:String,
        requerid: true
    },
    modelo:{
        type:String,
        requerid: true
    },
    origen:{
        type:String,
        requerid: true
    },
    añoFabricacion:{
        type:String,
        requerid: true
    },
    precio:{
        type: Number,
        requerid: true
    },
    cantidadStock:{
        type: Number,
        requerid: true
    },
    compraEnCuotas:{
        type: Boolean,
    }
})

const Guitarras = mongoose.model("Guitarras", schema);
module.exports = {Guitarras}