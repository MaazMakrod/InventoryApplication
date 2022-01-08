import React, { useState } from "react";

const AddInventoryForm = ({locations, handleCreateItem}) => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [note, setNote] = useState('')
    const [location, setLocation] = useState(undefined)

    let options = locations.map(l => {
        return {value: l.id, label: l.name}
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        let newItem = {
            name: name,
            quantity: quantity,
            notes: note
        }

        let locationName = null

        if(location !== undefined && location !== null && location !== '------------------'){
            newItem.location = location
            locationName = options.filter(o => o.value === location)[0].label
        }

        handleCreateItem(newItem, locationName)
        setNote('')
        setName('')
        setQuantity(0)
        setLocation(undefined)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
              Name &nbsp;
          <input
            type="text"
            value={name}
            name="name"
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
              Quantity &nbsp;
          <input
            type="number"
            min="0"
            value={quantity}
            name="quantity"
            onChange={({ target }) => setQuantity(target.value)}
          />
        </div>
        <div>
              Notes &nbsp;
          <input
            type="text"
            value={note}
            name="url"
            onChange={({ target }) => setNote(target.value)}
          />
        </div>
        <div>
              Location &nbsp;
            <select value = {location} onChange={({ target }) => setLocation(target.value)}>
                <option value={undefined}>------------------</option>
                {options.map(o => {
                   return( <option value = {o.value}>{o.label}</option>)
                })}
            </select>
        </div>
        <br/>
        <button type="submit">Add Item</button>
      </form>
    )
}

export default AddInventoryForm