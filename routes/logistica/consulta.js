const Medicamento = require("../../models/medicamento");
const {Op} = require('sequelize');

const Consulta = async (req, res) => {
    try{
        console.log(req.query)
        const listaMedicamentos = await Medicamento.findAll({raw: true, 
            where: {
                nome: {
                    [Op.iLike]: req.query.nome ? req.query.nome + '%' : '%'
                }
            }
        });
        res.status(200).json({mensagem: "Olá! você está na página de consulta.", dados: listaMedicamentos});
    }catch(erro){
        res.status(500).json({mensagem: "Houve um erro interno.", erro: erro.toString()})
    }
}

module.exports = Consulta;
