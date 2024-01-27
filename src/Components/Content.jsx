import React from 'react'
import '../styles/content.css'
import { useState } from 'react'
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import ViewItem from './ViewItem';
import EditItem from './EditItem';
import { useStore } from '../store';
import { sortByDueDate, sortByPriority } from '../Helpers/sortHelpers';

const Content = () => {

    const { items, setItems } = useStore();

    const [viewModal, setViewModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);

    const [editModal, setEditModal] = useState(false);
    const [editedItem, setEditedItem] = useState({
        id: null,
        item: '',
        desc: '',
        checked: false,
        dueDate: '',
      });

    const handleEdit = (id) => {
        const selectedItem = items.find((item) => item.id === id);
        setEditedItem(selectedItem);
        setEditModal(true);
    };
    
    
    const handleView = (id) => {
        const selectedItem = items.find((item) => item.id === id);
        setSelectedItem(selectedItem);
        setViewModal(true);
    }

    const handleCheck = (id) => {
        //console.log(id);
        const listItems = items.map((item)=>(
          item.id === id ? {...item, checked: !item.checked} : item
        ))
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item)=>(
            item.id !== id 
          ))
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }   

    const handleSortByDueDate = () => {
        const sortedItems = sortByDueDate(items);
        setItems(sortedItems);
      };
      
      const handleSortByPriority = () => {
        const sortedItems = sortByPriority(items);
        setItems(sortedItems);
      };
  
    const activeTasks = items.filter((task) => !task.checked);

  return (
    <main>
    <h3>All Tasks</h3>
    <div>
        <button onClick={handleSortByDueDate}>Sort by Due Date</button>
        <button onClick={handleSortByPriority}>Sort by Priority</button>
    </div>
        <ul>
            {items.map((item)=> (
                <li className='item' key={item.id}>
                    <input 
                        type='checkbox'
                        onChange={() => handleCheck(item.id)}
                        checked = {item.checked}
                    />
                    <label 
                        style={(item.checked)? {textDecoration:'line-through'}: null}
                    >{item.item}</label>
                    <p>{item.priority}</p>
                    <FaTrashAlt 
                        role='button'
                        onClick={() => handleDelete(item.id)}
                    />
                    <FaEye 
                         role='button'
                         onClick={() => handleView(item.id)}
                    />
                    <FaEdit 
                        role='button'
                        onClick={() => handleEdit(item.id)}
                    />

                </li>
            ))}
        </ul>

        <ViewItem 
            viewModal = {viewModal} 
            setViewModal = {setViewModal} 
            selectedItem={selectedItem}
        />

        <EditItem 
            editModal = {editModal}
            editedItem = {editedItem}
            setEditModal = {setEditModal}
            setEditedItem = {setEditedItem}
        />
    </main>
  )
}

export default Content