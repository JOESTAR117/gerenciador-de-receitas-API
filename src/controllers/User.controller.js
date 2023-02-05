import UserService from '../services/User.service'
import bcrypt from 'bcrypt'

const createUser = async (req, res) => {
    try {
        const { name, email, age, password, avatar } = req.body

        if (!name || !email || !age || !password || !avatar) {
            res.status(400).json({
                message: 'Submit all fields for registration',
            })
        }

        const user = await UserService.createService(req.body)

        if (!user) {
            return res.status(400).json({ message: 'Error creating User' })
        }

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user._id,
                name,
                email,
                age,
                avatar,
            },
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export default createUser
