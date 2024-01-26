import React from 'react'
import '../styles/additem.css'
import { useState } from 'react'
import { useStore  } from '../store'

const AddItem = () => {

    const { items, setItems } = useStore();
    const { itemName, setItemName } = useStore();
    const { itemDesc, setItemDesc } = useStore();

   const [addModal, setAddModal] = useState(false)

   const openaddItem = () =>{
        setAddModal(true);
   }

   const handleAddTask = () => {
        console.log('Adding task:', { itemName, itemDesc });
        const id = items.length ? items[items.length -1].id+1 : 1
        const newItem = {id, checked: false, item: itemName, desc: itemDesc}
        const listItems = [...items, newItem];
        setItems(listItems);
        setItemName("");
        setItemDesc("");
        setAddModal(false);
        
   }
  // console.log(items);
  return (
    <>
    <div className="floating-button-container">
        <button onClick = {openaddItem} className="floating-button">Add Task +</button>
    </div>
    {addModal &&
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
        <button onClick={()=>setAddModal(false)}>Cancel</button>
      </div>
        
    }
    </>
  )
}

export default AddItem