const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, 'Name is a required field']
	},
	quantity: {
		type: Number,
		integer: true,
		required: [true, 'Quantity is a required field']
	},
	notes: {
		type: String
	},
	location: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Location'
	}
})

itemSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
}, { timestamps: true } )

const Item = mongoose.model('Item', itemSchema)
module.exports = Item