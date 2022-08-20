const { genSalt, hash, compare } = require('bcrypt')

module.exports = {
    encrypt: async (password) => {
        const salt = await genSalt(10)
        return await hash(password, salt)
    },
    compare: async (password, hash) => {
        return await compare(password, hash)
    }
}