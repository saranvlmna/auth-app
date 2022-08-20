const { User } = require('../db')
const passwordService = require('./password')

module.exports = {

    SignupUser: async (user) => {
        let existingUser
        existingUser = await User.findByEmail(user.email)

        if (existingUser) {
            throw new Error('User Already exists with this Email id')
        }
        existingUser = await User.findByMobile(user.phone)

        if (existingUser) {
            throw new Error('User Already exists with this Mobile Number')
        }
        user.password = await passwordService.encrypt(user.password)

        return await User.create(user)
    }
}