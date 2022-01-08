import React, { useEffect } from "react";
import ViewItem from "./Components/ViewItem";
import ViewLocation from "./Components/ViewLocation";
import AddInventoryForm from "./Components/AddInventoryForm";
import AddLocation from "./Components/AddLocation";
import { useState } from "react/cjs/react.development";
import itemService from './Services/item'
import locationService from "./Services/location";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [items, setItems] = useState([])
  const [locations, setLocations] = useState([])

  const handleCreateLocation = async (newLocation) => {
    if(newLocation.name.length < 3) {
      toast.error('Name is not long enough, must be greater than 3 characters')
      return
    }

    let matches = locations.filter(l => l.name === newLocation.name)

    if(matches.length > 0){
      toast.error('Name must be unique')
      return
    }
    
    const savedLocation = await locationService.create(newLocation)
    setLocations(locations.concat(savedLocation))
  }

  const handleCreateItem = async (newItem, locationName) => {
    if(newItem.name.length < 3){
      toast.error('Name is not long enough, must be greater than 3 characters')
      return
    }

    let matches = items.filter(l => l.name === newItem.name)

    if(matches.length > 0){
      toast.error('Item is in system, update the item')
      return
    }

    let savedItem = await itemService.create(newItem)
    let otherItem = {...savedItem, location: {name: locationName}}
    setItems(items.concat(otherItem))
  }

  const handleLocationDelete = async (id) => {
    await locationService.remove(id)
    let newItems = await itemService.getAllItems()
    setItems(newItems)
    setLocations(locations.filter(l => l.id !== id))
  }

  const handleItemDelete = async (id) => {
    await itemService.remove(id)
    setItems(items.filter(i => i.id !== id))
  }

  const handleItemUpdate = async (updatedItem, locationName, id) => {
    if(updatedItem.name.length < 3){
      toast.error('Name is not long enough, must be greater than 3 characters')
      return
    }

    let savedItem = await itemService.update(id, updatedItem)
    let otherItem = {...savedItem, location: {name: locationName}}
    setItems(items.map(i => {
      if(i.id === id)
        return otherItem
      return i
    }))
  }

  const handleLocationUpdate = async (id, updatedLocation) => {
    if(updatedLocation.name.length < 3) {
      toast.error('Name is not long enough, must be greater than 3 characters')
      return
    }

    let matches = locations.filter(l => l.name === updatedLocation.name)

    if(matches.length > 0){
      toast.error('Name must be unique')
      return
    }
    
    const savedLocation = await locationService.update(id, updatedLocation)
    setLocations(locations.map(l => {
      if(l.id === id)
        return savedLocation
      return l
    }))

    let newItems = await itemService.getAllItems()
    setItems(newItems)
  }

  useEffect(() => {
    locationService.getAllLocations().then(l => {
      setLocations(l)
    })
  }, [])

  useEffect(() => {
    itemService.getAllItems().then(i => {
      setItems(i)
    })
  }, [])

  return (
    <div>
      <header className="App-header">
        <h1>Shopify Backend Inventory Application by Maaz Makrod</h1>
      </header>

      <ToastContainer draggable={false} transition={Zoom} position='top-center' autoClose={2000}/>

      <div className="Inventory">
        <h2>Items</h2>
        {
          items.length <= 0 ? <p>Add an item to start....</p> : <ViewItem locations={locations} handleItemEdit={handleItemUpdate} items={items} handleItemDelete={handleItemDelete}/>
        }
        <h2>Add Item</h2>
        <AddInventoryForm locations = {locations} handleCreateItem={handleCreateItem}/>
      </div>

      <div className="Location">
        <h2>Locations</h2>
        {
          locations.length <= 0 ? <p>Begin adding locations to associate an item with them</p> : <ViewLocation handleLocationEdit = {handleLocationUpdate} locations={locations} handleLocationDelete={handleLocationDelete}/>
        }
        <h2>Add Location</h2>
        <AddLocation handleCreateLocation={handleCreateLocation}/>
      </div>
    </div>
  );
}

export default App;
