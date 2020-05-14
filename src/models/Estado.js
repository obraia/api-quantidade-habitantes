const mongoose = require('mongoose');
const Cidade = require('./utils/Cidade');

const Estado = new mongoose.Schema({
    sigla: String,
    nome: String,
    cidades: [Cidade],
});

module.exports = mongoose.model('Estado', EstadoSchema);