const { User } = require('../model')


module.exports = {
    findByEmail: async (email) => {
        return await User.findOne({ email: email })
    },
    findByMobile: async (mobile) => {
        return await User.findOne({ phone: mobile })
    },
    create: async (user) => {
        return await User.create(user)
    }
}