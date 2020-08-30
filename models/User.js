const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)