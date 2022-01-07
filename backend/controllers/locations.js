const locationRouter = require('express').Router()
const Location = require('../models/location')
const Item = require('../models/item')

locationRouter.get('/', async (req, res) => {
	const locations = await Location.find({}).populate('items')
	res.json(locations)
})

locationRouter.post('/', async (req,res) => {
	const body = req.body
	const  location = new Location(body)
	const savedLocation = await location.save()
	res.json(savedLocation.toJSON())
})

locationRouter.put('/:id', async (req, res) => {
	const id = req.params.id
	const location = req.body
	let updatedLocation = await Location.findByIdAndUpdate(id, location, { new : true })
	res.json(updatedLocation)
})

locationRouter.delete('/:id', async (req, res, next) => {
	const id = req.params.id
	Item.updateMany({ location : id }, { location : null }, (err, docs) => {
		if (err)
			next(err)
		else
			console.log('Updated Documents', docs)
	})
	await Location.findByIdAndRemove(id)
	res.status(204).end()
})

module.exports = locationRouter