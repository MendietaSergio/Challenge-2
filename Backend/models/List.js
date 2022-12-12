const { Schema, model } = require('mongoose')

const ListSchema = Schema(
    {
        question: {
            type: String
        },
        options: {
            type: Object
        },
        correctAnswer: {
            type: String
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
)

module.exports = model('List', ListSchema)