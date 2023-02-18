const validarOrigen= async(req, res, next) =>{
    try {
        const {origen, añoFabricacion} = req.body
        if(origen.toLowerCase() == "china" && añoFabricacion== 1988){
            res.status(400)
            .json({msg: "Las guitarras de 1988 de origen china no se pueden ingresar por desperfectos tecnicos"})
        }else{
            next()
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports={validarOrigen}