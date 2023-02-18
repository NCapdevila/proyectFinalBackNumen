const axios = require('axios')

const consultaAxios = async (req, res) =>{
    try {
        const resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.nombre}`)
        res.json({
            response: resultado.data,
            status: resultado.status
        })
    } catch (error) {
        res.json({
            response: error.response.data,
            status: error.response.status
        })
    }
}

module.exports={consultaAxios}