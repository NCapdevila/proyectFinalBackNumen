const { Guitarras } = require("../models/Guitarras")
const { validationResult } =require('express-validator')

const indexRouter = (req, res)=>{
    res.send("Bienvenido, visita la documentación: https://github.com/NCapdevila/proyectFinalBackNumen")
}


const verTodasGuitarras = async(req, res) =>{
    try {
        const guitarras = await Guitarras.find()
        res.status(200).json(guitarras)
    } catch (error) {
        res.status(401).json(error)
    }
}

const verGuitarra = async(req, res) =>{
    try {
        const guitarra = await Guitarras.findById(req.params.id)
        res.status(200).json(guitarra)
    } catch (error) {
        res.status(401).json(error)
    }
}

const guardarGuitarra = async(req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const guitarraNueva = new Guitarras(req.body)
            await guitarraNueva.save()
            res.status(201).json({guitarraNueva})
        } else {
            res.status(501).json(err)
        }
        
    } catch (error) {
        res.status(501).json(error)
    }
}

const editarGuitarra = async(req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Guitarras.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json("Se actualizo correctamente la guitarra")
        } else {
            res.status(501).json(err)
        }
    } catch (error) {
        res.status(501).json(error)
    }
}

const borrarGuitarra = async(req, res)=>{
    try {
        await Guitarras.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "La guitarra fue eliminada correctamente"})
    } catch (error) {
        res.status(501).json(error)
    }
}

const borrarTodasLasGuitarras = async(req, res)=>{
    try {
        await Guitarras.deleteMany()
        res.status(200).json({msg: "Todas las guitarras fueron eliminadas"})
    } catch (error) {
        res.status(501).json(error)
    }
}

module.exports={verTodasGuitarras, verGuitarra, guardarGuitarra, editarGuitarra, borrarGuitarra, borrarTodasLasGuitarras, indexRouter}