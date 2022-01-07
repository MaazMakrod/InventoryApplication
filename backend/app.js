const config = require('./utils/config')
const express = require('express')
require('express-async-errors')

const app = express()
const cors = require('cors')

const itemRouter = require('./controllers/items')
const locationRouter = require('./controllers/locations')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.DATABASE)

mongoose.connect(config.DATABASE)
	.then(() => {
		logger.info('connected to MongoDB')
	})
	.catch((error) => {
		logger.error('error connecting to MongoDB:', error.message)
	})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/locations', locationRouter)
app.use('/api/items', itemRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app