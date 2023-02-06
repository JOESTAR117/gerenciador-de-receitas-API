import mongoose from 'mongoose'

const RevenuesSchema = new mongoose.Schema({
    user: {
        title: String,
        month: {
            title: String,
            listMonth: {
                typeRevenue: String,
                value: String,
                dataEntry: String,
            },
        },
    },
})

const Revenues = mongoose.model('Revenues', RevenuesSchema)

export default Revenues
