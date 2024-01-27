import React from 'react'
import { useStore } from '../store';

const EditItem = ({editModal, editedItem, setEditModal, setEditedItem}) => {

    const { items, setItems } = useStore();

    const handleSaveEdit = () => {
        const updatedItems = items.map((item) =>
          item.id === editedItem.id ? editedItem : item
        );
        setItems(updatedItems);
        localStorage.setItem('todo_list', JSON.stringify(updatedItems));
        setEditModal(false);
      };
  return (
    <div>
    {editModal && (
        <div className='modal'>
          <h2>Edit Item</h2>
          <label>
            Name:
            <input
              type='text'
              value={editedItem.item}
              onChange={(e) => setEditedItem({ ...editedItem, item: e.target.value })}
            />
          </label>
          <label>
            Description:
            <input
              type='text'
              value={editedItem.desc}
              onChange={(e) =>
                setEditedItem({ ...editedItem, desc: e.target.value })
              }
            />
          </label>
          <label>Due Date:</label>
          <input
            type="date"
            value={editedItem.dueDate}
            onChange={(e) =>
              setEditedItem({ ...editedItem, dueDate: e.target.value })
            }
          />
          <label>Priority:</label>
          <select 
            id="priority" 
            name="priority" 
            value={editedItem.priority} 
            onChange={
              (e)=>setEditedItem({ ...editedItem, priority: e.target.value })
            }>
            <option value="P0">Priority 0</option>
            <option value="P1">Priority 1</option>
            <option value="P2">Priority 2</option>
          </select>

          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setEditModal(false)}>Cancel</button>
        </div>
        )}
    </div>
  )
}

export default EditItem