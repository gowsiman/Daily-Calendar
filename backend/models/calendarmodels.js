const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    tasks: {
        type: [Object],
        default: []
    }
    // calendar : [{ type: mongoose.Schema.Types.ObjectId, ref: 'CalendarModel' }]
})

const CalendarSchema = new mongoose.Schema({
    date: String,
    tasks: [String],
})

const UserModel = mongoose.model("UserModel", UserSchema)
const CalendarModel = mongoose.model("CalendarModel", CalendarSchema)

module.exports = {UserModel, CalendarModel}