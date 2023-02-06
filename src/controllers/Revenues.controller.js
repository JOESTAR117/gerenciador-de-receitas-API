import Revenues from '../models/Revenues'

const createRevenue = async (req, res) => {
    const { typeRevenue, value, dateEntry } = req.body.user.month.listMonth

    const title = req.body.user.month.title

    const user = req.body.user.title

    if (!typeRevenue || !value || !dateEntry) {
        return res
            .status(422)
            .json({ message: 'It is mandatory to fill in all fields' })
    }

    const revenues = new Revenues({
        user: {
            title: user,
            month: {
                title,
                listMonth: {
                    typeRevenue,
                    value,
                    dateEntry,
                },
            },
        },
    })

    try {
        await revenues.save()
        return res.status(201).json({ message: 'successful registration!' })
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export default createRevenue;