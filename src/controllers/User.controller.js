import UserService from '../services/User.service'

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

const findAllUsers = async (req, res) => {
    try {
        const users = await UserService.findAllService()

        if (users.length === 0) {
            return res
                .status(400)
                .json({ message: 'There are no registered users' })
        }

        res.status(201).json(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findById = async (req, res) => {
    try {
        const user = req.user

        res.status(200).json(user)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { name, email, age, password, avatar } = req.body

        if (!name && !email && !age && !password) {
            res.status(400).send({
                message: 'Submit at least one fields for update',
            })
        }

        const { id, user } = req

        await UserService.updateService(id, name, email, age, password, avatar)
        res.status(200).send({ message: 'User updated successfully' })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export { createUser, findAllUsers, findById, updateUser }
