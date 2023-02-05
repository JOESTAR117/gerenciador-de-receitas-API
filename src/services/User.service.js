import User from '../models/User'

const createService = (body) => User.create(body)

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const updateService = (id, name, email, age, password) =>
    User.findByIdAndUpdate({ _id: id }, { name, email, age, password })

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
}
