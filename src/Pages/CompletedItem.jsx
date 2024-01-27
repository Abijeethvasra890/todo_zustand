import React from 'react';
import { useStore } from '../store';
import '../styles/completeditem.css';

const CompletedTasks = () => {
  const { items } = useStore();

  // Filter completed tasks
  const completedTasks = items.filter((task) => task.checked);

  return (
    <main>
      <h3>Completed Tasks</h3>
        <ul>
            {completedTasks.map((item)=> (
                <li className='item' key={item.id}>
                    <label 
                        style={(item.checked)? {textDecoration:'line-through'}: null}
                    >{item.item}</label>
                    <p>{item.priority}</p>
                </li>
            ))}
      </ul>
    </main>
  );
};

export default CompletedTasks;
