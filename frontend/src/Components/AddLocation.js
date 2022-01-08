import React, { useState } from "react";

const AddLocation = ({handleCreateLocation}) => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newItem = {
            name: name,
        }

        handleCreateLocation(newItem)
        setName('')
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
        <br/>
        <button type="submit">Add Location</button>
      </form>
    )
}

export default AddLocation