
const Type = require('../../models/document/Type')

exports.findTypeAlreadyExist = async (req) => {

    try {
        const type = await Type.find()
        const typeIsExist = type.find(e => {
            console.log(req.body.type)
            return JSON.stringify(e.type) === JSON.stringify(req.body.type)
        })

        return { status: 'success', data: typeIsExist }

    } catch (err) {
        return { status: 'fail', data: err }
    }


}