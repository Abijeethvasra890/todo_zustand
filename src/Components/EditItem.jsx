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
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setEditModal(false)}>Cancel</button>
        </div>
        )}
    </div>
  )
}

export default EditItem