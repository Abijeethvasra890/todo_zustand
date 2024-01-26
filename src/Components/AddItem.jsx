import React from 'react'
import '../styles/additem.css'
import { useState } from 'react'

const AddItem = ({itemName, setItemName, itemDesc,setItemDesc, items, setItems}) => {
   const [openModal, setOpenModal] = useState(false)

   const openaddItem = () =>{
        setOpenModal(true);
   }

   const handleAddTask = () => {
        console.log('Adding task:', { itemName, itemDesc });
        const id = items.length ? items[items.length -1].id+1 : 1
        const newItem = {id, checked: false, item: itemName, desc: itemDesc}
        const listItems = [...items, newItem];
        setItems(listItems);
        setItemName("");
        setItemDesc("");
        setOpenModal(false);
        
   }
  // console.log(items);
  return (
    <>
    <div className="floating-button-container">
        <button onClick = {openaddItem} className="floating-button">Add Task +</button>
    </div>
    {openModal &&
        <div className="modal">
        <h2>Add Task</h2>
        <label>
          Name:
          <input type="text" 
          value={itemName}
           onChange={(e)=>setItemName(e.target.value)} />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={itemDesc}
            onChange={(e)=>setItemDesc(e.target.value)}
          />
        </label>
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={()=>setOpenModal(false)}>Cancel</button>
      </div>
        
    }
    </>
  )
}

export default AddItem