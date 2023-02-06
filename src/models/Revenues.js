import mongoose from 'mongoose'

const RevenuesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    month: {
        type: Date,
        default: Date.now(),
    },
    typeRevenue: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    value: {
        type: String,
        required: true,
    },
})

const Revenues = mongoose.model('Revenues', RevenuesSchema)

export default Revenues
