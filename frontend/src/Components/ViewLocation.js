import React, { useState } from "react";

const Location = ({location, handleLocationDelete, handleLocationEdit}) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(location.name)

    const handleSubmit = (e) => {
        e.preventDefault()
        let updatedLocation = {
            name: name
        }
        handleLocationEdit(location.id, updatedLocation)
        setEdit(false)
    }

    const handleDeleteClick = () => {
        if(window.confirm('Are you sure you want to delete this location? '))
            handleLocationDelete(location.id)
    }

    return (
        <>
            <p>Name: {location.name}</p>
            <p>Delete? <button onClick={handleDeleteClick}>Delete Location</button></p>
            <p>Edit? <button onClick={() => setEdit(!edit)}>Edit Location</button></p>
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
                    <br/>
                    <button type="submit">Add Location</button>
              </form> 
            }
        </>
    )
}

const ViewLocation = ({locations, handleLocationDelete, handleLocationEdit}) => {
    return (
        <>
            {locations.map( l => {
                return (
                <>
                    <Location location = {l} handleLocationDelete={handleLocationDelete} handleLocationEdit={handleLocationEdit}/>
                    <br/>
                </>)
            })}
        </>
    )
}

export default ViewLocation