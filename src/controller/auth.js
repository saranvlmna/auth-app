const userService = require('../service/user')


module.exports = {

    signupForm: (req, res, next) => {

    },
    loginForm: (req, res, next) => {

    },

    signup: async(req, res, next) => {
        try {
            const user = await userService.SignupUser(req.body)
            console.log(user)
        } catch (error) {
            next(error)
        }
    },
    login: (req, res, next) => {

    }
}