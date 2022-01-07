require('dotenv').config()

const PORT = process.env.PORT
const DATABASE = process.env.DATABASE

module.exports = {
	DATABASE,
	PORT
}