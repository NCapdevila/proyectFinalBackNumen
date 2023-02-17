const express = require('express')
const router = express.Router()
const Controller = require("../controller/guitarrasController")
const { validarID } = require('../middleware/validarID')
const { validarOrigen } = require('../middleware/validarOrigen')
const {check}=require('express-validator')

router.get("/guitarras/vertodo", Controller.verTodasGuitarras)
router.get("/guitarras/ver/:id",validarID, Controller.verGuitarra)

router.post("/guitarras/crear",[
    check("marca").not().isEmpty().withMessage("El campo marca de la guitarra es requerido"),
    check("modelo").not().isEmpty().withMessage("El campo modelo de la guitarra es requerido"),
    check("origen").not().isEmpty().withMessage("El origen de la guitarra es requerido"),
    check("añoFabricacion").not().isEmpty().withMessage("El año de fabración de la guitarra es requerido").isLength({min:4,max:4}).withMessage("El año debe ser expresado con 4 digitos"),
    check("precio").not().isEmpty().withMessage("El campo precio de la guitarra es requerido").isLength({min:1}).withMessage("El precio tiene que tener un valor"),
    check("cantidadStock").not().isEmpty().withMessage("Es necesario conocer el stock de la guitarra"),
    check("compraEnCuotas").not().isEmpty().withMessage("Es necesario conocer si se puede comprar en cuotas la guitarra")
], Controller.guardarGuitarra)

router.put("/guitarras/editar/:id",validarID,[
    check("marca").not().isEmpty().withMessage("El campo marca de la guitarra es requerido para actualizar"),
    check("modelo").not().isEmpty().withMessage("El campo modelo de la guitarra es requerido para actualizar"),
    check("origen").not().isEmpty().withMessage("El origen de la guitarra es requerido para actualizar"),
    check("añoFabricacion").not().isEmpty().withMessage("El año de fabración de la guitarra es requerido para actualizar").isLength({min:4,max:4}).withMessage("El año debe ser expresado con 4 digitos"),
    check("precio").not().isEmpty().withMessage("El campo precio de la guitarra es requerido para actualizar").isLength({min:1}).withMessage("El precio tiene que tener un valor"),
    check("cantidadStock").not().isEmpty().withMessage("Es necesario conocer el stock de la guitarra para actualizar"),
    check("compraEnCuotas").not().isEmpty().withMessage("Es necesario conocer si se puede comprar en cuotas la guitarra para actualizar")
], Controller.editarGuitarra)

router.delete("/guitarras/borrar/:id",validarID, Controller.borrarGuitarra)
router.delete("/guitarras/borrar", Controller.borrarTodasLasGuitarras)

module.exports= router