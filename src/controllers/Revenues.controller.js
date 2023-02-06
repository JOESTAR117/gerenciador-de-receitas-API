import createService from '../services/Revenue.service'

const createRevenue = async (req, res) => {
    const { title, typeRevenue, value } = req.body
    try {
        if (!title || !typeRevenue || !value) {
            res.status(400).json({
                message: 'Submit all fields for registration',
            })
        }
        await createService({
            title,
            typeRevenue,
            value,
            user: req.userId,
        })
        res.status(201).json({message: `Revenue created successfully`})
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export default createRevenue
