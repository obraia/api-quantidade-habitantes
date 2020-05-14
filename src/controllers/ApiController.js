const ApiController = {
    async index(req, res) {
        const {uf, cidade} = req.query;

        console.log(uf, cidade);

        return res.status(200).json({uf, cidade});
    }
}

module.exports = ApiController;