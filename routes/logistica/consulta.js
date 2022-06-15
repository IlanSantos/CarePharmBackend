const Medicamento = require("../../models/medicamento");

const Consulta = async (req, res) => {
    try{
        const listaMedicamentos = await  Medicamento.findAll({raw: true});
        res.status(200).json({mensagem: "Olá! você está na página de consulta.", dados: listaMedicamentos});
    }catch(erro){
        res.status(500).json({mensagem: "Houve um erro interno.", erro: erro.toString()})
    }
}

module.exports = Consulta;
