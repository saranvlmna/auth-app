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

        if (user.role == 'manager') {
            user.isManager = true
        }
        else {
            user.isDeveloper = true
        }

        return await User.create(user)
    },

    loginUser: async (user) => {
        let existingUser
        existingUser = await User.findByEmail(user.email)
        if (!existingUser) {
            throw new Error('User does not exist')
        }
        let isValid
        isValid = await passwordService.compare(user.password, existingUser.password)
        if (!isValid) {
            throw new Error('Password is Invalid')
        } else {
            return existingUser
        }
    }
}