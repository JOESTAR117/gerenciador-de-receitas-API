import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    age: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
})

const User = mongoose.model('User', UserSchema)

export default User
