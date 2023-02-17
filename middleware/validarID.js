const { Guitarras } = require('../models/Guitarras')

const validarID = async(req, res, next) =>{
    try {
        const item = await Guitarras.findById(req.params.id)
        if( item !== null){
        next()
        }else{
        res.status(500).json({msg: "El id ingresado es invalido" })
        }
    } catch (error) {
        res.status(500).json({msg: "El formato del id es incorrecto"})
    }
}

module.exports={validarID}