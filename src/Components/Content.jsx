import React from 'react'
import '../styles/content.css'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState([
        {
            id:1,
            checked:true,
            item: "Learn React"
        },
        {
            id:2,
            checked:true,
            item: "Learn WD"
        },
        {
            id:3,
            checked:false,
            item: "Learn AI"
        }
    ])

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

  return (
    <main>
        <ul>
            {items.map((item)=> (
                <li className='item' key={item.id}>
                    <input 
                        type='checkbox'
                        onChange={() => handleCheck(item.id)}
                        checked = {item.checked}
                    />
                    <label>{item.item}</label>
                    <FaTrashAlt 
                        role='button'
                        onClick={() => handleDelete(item.id)}
                    />
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Content