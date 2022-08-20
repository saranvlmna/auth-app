const userService = require('../service/user')
const path = require('path')
const filepath = path.join(__dirname, '../../public/')

module.exports = {

    signupForm: (req, res, next) => {
        try {
            res.render('signup')
        } catch (error) {
            next(error)
        }
    },

    loginForm: (req, res, next) => {
        try {
            res.render('login')
        } catch (error) {
            next(error)
        }
    },

    signup: async (req, res) => {
        try {
            const user = await userService.SignupUser(req.body)
            if (user) {
                let image = req.files.image;
                image.mv(filepath + user.id + '.jpg')
                res.render('dashboard.hbs', { user: user })
            }
        } catch (error) {
            res.render('signup', { logInError: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const user = await userService.loginUser(req.body)
            if (user) {
                res.render('dashboard.hbs', { user: user })
            }
        } catch (error) {
            res.render('login', { logInError: error.message });
        }

    }
}

