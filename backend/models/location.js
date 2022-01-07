const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, 'Name is a required field']
	},
	items: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Item'
		}
	]
})

locationSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
}, { timestamps: true })

const Location = mongoose.model('Location', locationSchema)
module.exports = Location