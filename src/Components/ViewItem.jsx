import React from 'react'
import '../styles/viewitem.css'

const ViewItem = ({viewModal, setViewModal, selectedItem}) => {
 
  return (
    <div>
    {viewModal && 
        <div className="modal">
        <h2>Item Details</h2>
        <p>Name: {selectedItem.item} </p>
        <p>Description: {selectedItem.desc}</p>
        <p>Checked: {selectedItem.checked ? 'Yes' : 'No'}</p>
        <p>CreatedDate: {selectedItem.createdDate}</p>
        <p>DueDate: {selectedItem.dueDate}</p>
        <button onClick={() => setViewModal(false)}>Close</button>
        </div>
    }

    </div>
  )
}

export default ViewItem