import User from '../models/User'
import bcrypt from 'bcrypt'

export class AuthRegisterUserController {
    static async init(req, res) {
        res.send({ message: 'welcome to API' })
    }

    static async registerUser(req, res) {
        const { name, email, age, password, confirmPassword } = req.body

        let image = ''

        if (req.file) {
            image = req.file.filename
        }
        if (!name || !email || !age || !password) {
            res.status(400).json({
                message: 'Submit all fields for registration',
            })
        }
        if (password != confirmPassword) {
            return res
                .status(422)
                .json({ message: 'passwords are not the same' })
        }

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ message: 'Email already exists' })
        }

        const hash = await bcrypt.genSalt(10)

        const passwordIsValid = await bcrypt.hash(password, hash)

        const user = new User({
            name,
            email,
            age,
            image,
            password: passwordIsValid,
        })
        try {
            await user.save()
            res.status(201).json({
                message: 'User created successfully',
                user: {
                    id: user._id,
                    name,
                    email,
                    age,
                },
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
