const { User } = require('../model')


module.exports = {
    findByEmail: async (email) => {
        return await User.findOne({ email })
    },
    findByMobile: async (mobile) => {
        return await User.findOne({ mobile })
    },
    create: async (user) => {
        return await User.create(user)
    }
}