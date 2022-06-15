const express = require("express");
const Cadastro = require("./cadastro");
const Consulta = require("./consulta");
const router = express.Router();

router.post("/cadastro", Cadastro);
router.get("/consulta", Consulta)

module.exports = router;

