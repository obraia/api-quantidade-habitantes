const mongoose = require('mongoose');

const Cidade = new mongoose.Schema({
    nome: String,
    habitantes: Number,
});

module.exports = Cidade;