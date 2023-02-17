const {Guitarras}=require('../models/Guitarras')

const validarOrigen= async(req, res, next) =>{
    try {
        const item = await Guitarras(req.body)
        if(item == "china" && item == 1988){
            res.status(500)
            .json({msg: "Las guitarras de 1988 de origen china no se pueden ingresar por desperfectos tecnicos"})
        }else{
            next()
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports={validarOrigen}