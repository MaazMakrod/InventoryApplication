const itemRouter = require('express').Router()
const Location = require('../models/location')
const Item = require('../models/item')

itemRouter.get('/', async (req, res) => {
	const items = await Item.find({}).populate('location')
	res.json(items)
})

itemRouter.post('/', async (req,res) => {
	const body = req.body
	const locationId = body.location

	if(locationId !== undefined && locationId !== null){
		let location = await Location.findById(locationId)

		const  item = new Item(body)
		const savedItem = await item.save()
		location.items = location.items.concat(savedItem._id)
		await location.save()

		res.json(savedItem.toJSON())
	} else {
		const  item = new Item(body)
		const savedItem = await item.save()
		res.json(savedItem.toJSON())
	}


})

itemRouter.put('/:id', async (req, res) => {
	const id = req.params.id
	const body = req.body
	let item = await Item.findById(id)

	if(body.location !== item.location && item.location !== undefined && item.location !== null){
		if(body.name)
			item.name = body.name
		if(body.quantity)
			item.quantity = body.quantity
		if(body.notes)
			item.notes = body.notes
		if(body.location)
			item.location = body.location

		let updatedItem = await item.save()
		console.log('updatedItem', updatedItem)

		let oldLocation = await Location.findById(item.location)
		oldLocation.items = oldLocation.items.filter(item => item !== id)
		await oldLocation.save()

		let newLocation = await Location.findById(body.location)
		newLocation.items = newLocation.items.concat(updatedItem._id)
		await newLocation.save()

		res.json(updatedItem)
	} else {
		if(body.name)
			item.name = body.name
		if(body.quantity)
			item.quantity = body.quantity
		if(body.notes)
			item.notes = body.notes
		if(body.location)
			item.location = body.location

		let updatedItem = await item.save()
		res.json(updatedItem)
	}

})

itemRouter.delete('/:id', async (req, res, next) => {
	const id = req.params.id
	let item = await Item.findById(id)

	if(item.location !== undefined && item.location !== null) {
		let location = await Location.findById(item.location)
		location.items = location.items.filter(item => item !== id)
		await location.save()
	}

	await Item.findByIdAndRemove(id)
	res.status(204).end()
})

module.exports = itemRouter