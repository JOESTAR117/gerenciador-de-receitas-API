import User from '../models/User'

const createService = (body) => User.create(body)

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const updateService = (id, name, email, age, password, avatar) =>
    User.findOneAndUpdate({ _id: id }, { name, email, age, password, avatar })

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
}
