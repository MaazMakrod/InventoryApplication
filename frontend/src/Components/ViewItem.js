import React, { useState } from "react";

const Item = ({item, handleItemDelete, locations, handleItemEdit}) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(item.name)
    const [quantity, setQuantity] = useState(item.quantity)
    const [note, setNote] = useState(item.notes)
    const [location, setLocation] = useState(item.location)

    let options = locations.map(l => {
        return {value: l.id, label: l.name}
    })

    const handleDeleteClick = () => {
        if(window.confirm('Are you sure you want to delete this item?'))
            handleItemDelete(item.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let updateItem = {
            name: name,
            quantity: quantity,
            notes: note
        }

        let locationName = null

        console.log(location)
        console.log(options)

        if(location === undefined){
            if(options.length === 0){
                locationName = null
            }else {
                setLocation(options[0].value)
                locationName = options[0].label
                updateItem.location = options[0].value
            }
        } else if(location !== null && location.name !== null && location !== '------------------'){
            updateItem.location = location
            locationName = options.filter(o => o.value === location)[0].label
        }

        handleItemEdit(updateItem, locationName, item.id)
        setEdit(false)
    }

    return (
        <>
            <p>Name: {item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Notes: {item.notes}</p>
            <p>Location: {item.location === null || item.location === undefined ? 'N/A' : item.location.name === null ? 'N/A' : item.location.name}</p>

            <p>Delete? <button onClick={handleDeleteClick}>Delete Item</button></p>
            <p>Edit? <button onClick={() => setEdit(!edit)}>Edit Item</button></p>
            { 
                edit &&
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
                            {options.map(o => {
                            return( <option value = {o.value}>{o.label}</option>)
                            })}
                        </select>
                    </div>
                    <br/>
                    <button type="submit">Add Item</button>
                </form>
            }
        </>
    )
}

const ViewItem = ({items, handleItemDelete, locations, handleItemEdit}) => {
    return (
        <>
            {items.map( i => {
                return (
                <>
                    <Item item = {i} handleItemDelete={handleItemDelete} locations = {locations} handleItemEdit={handleItemEdit}/>
                    <br/>
                </>)
            })}
        </>
    )
}

export default ViewItem