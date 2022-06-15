const Medicamento = require("../../models/medicamento");

const Cadastro = async (req, res) => {
    try{
        const {nomeMedicamento, descricaoMedicamento} = req.body;
        
        if(!nomeMedicamento){
            res.status(404).json({mensagem: "Você não informou o nome do medicamento.", erro: true});
            return;
        }

        const novoMedicamento = await Medicamento.create({
            nome: nomeMedicamento,
            descricao: descricaoMedicamento
        }, {raw: true});

        res.status(200).json({mensagem: "Medicamento cadastrado com sucesso.", dados: novoMedicamento});
    }catch(erro){
        res.status(500).json({mensagem: "Houve um erro interno.", erro: erro.toString()})
    }
}


module.exports = Cadastro;
