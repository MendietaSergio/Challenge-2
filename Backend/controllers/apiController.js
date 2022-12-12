const data = require('../data/data');
const List = require('../models/List');
module.exports = {
    List: async (req, res) => {
        try {
            const question = await List.find()
            console.log(question);
            return res.json(question)
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                ok: false,
                msg: error.message ? error.message : 'Comuniquese con el desarrollador'
            })
        }
    },
    Add: async (req, res) => {
        console.log(req.body)
        try {
            const { question, options, correctAnswer } = req.body;
            const newQuestion = new List({
                question,
                options,
                correctAnswer
            })
            await newQuestion.save()
            console.log("=> ",newQuestion);
            return res.json({
                ok: true,
                msg: "Pregunta agregada",
                newQuestion
            })
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode || 500).json({
                ok: false,
                msg: error.message ? error.message : 'Comuniquese con el desarrollador'
            })
        }
    }
}