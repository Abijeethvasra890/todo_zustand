import React from 'react';
import { useStore } from '../store';
import '../styles/completeditem.css';

const PendingTasks = () => {
  const { items } = useStore();

  // Filter pending tasks
  const pendingTasks = items.filter((task) => !task.checked);

  return (
    <main>
      <h1>Pending Tasks</h1>
      <ul>
      {pendingTasks.map((item)=> (
        <li className='item' key={item.id}>
            <label 
                style={(item.checked)? {textDecoration:'line-through'}: null}
            >{item.item}</label>   
        </li>
    ))}
      </ul>
    </main>
  );
};

export default PendingTasks;
