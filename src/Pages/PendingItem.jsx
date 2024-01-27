import React from 'react';
import { useStore } from '../store';
import '../styles/pendingitem.css';
import { useState, useEffect } from 'react';
import { sortByDueDate, sortByPriority } from '../Helpers/sortHelpers';

const PendingTasks = () => {
  const { items, setItems } = useStore();
  const [originalItems, setOriginalItems] = useState([]);

  useEffect(() => {
    // Store the original items when the component mounts
    setOriginalItems(items);
  },[originalItems]);

  // Filter pending tasks
  const pendingTasks = items.filter((task) => !task.checked);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSortByDueDate = () => {
    const sortedItems = sortByDueDate(items);
    setItems(sortedItems);
  };
  
  const handleSortByPriority = () => {
    const sortedItems = sortByPriority(items);
    setItems(sortedItems);
  };

  const handleFilterByDate = () => {
    // Filter tasks based on the selected date range
    const filteredTasks = items.filter((task) => {
      if (startDate && endDate) {
        return task.dueDate >= startDate && task.dueDate <= endDate;
      } else {
        return true; // If no date range is selected, show all tasks
      }
    });

    // Update the state with the filtered tasks
    setItems(filteredTasks);
  };

  const handleResetFilter = () => {
    setStartDate(null);
    setEndDate(null);
   // console.log(originalItems)
    setItems(originalItems)
  }

  return (
    <main>
    <h3>Pending Tasks</h3>
    <div>
        <button onClick={handleSortByDueDate}>Sort by Due Date</button>
        <button onClick={handleSortByPriority}>Sort by Priority</button>
    </div>
    <div>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate || ''}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate || ''}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button onClick={handleFilterByDate}>Filter by Date</button>
      <button onClick={handleResetFilter}>Reset Filter</button>
    </div>
    {pendingTasks.length > 0 ?  (
    <table className="task-table">
    <thead>
      <tr>
        <th>Task</th>
        <th>Priority</th>
        <th>Due Date</th>
      </tr>
    </thead>
    <tbody>
      {pendingTasks.map((item) => (
        <tr key={item.id}>
          <td>{item.item}</td>
          <td>{item.priority}</td>
          <td>{item.dueDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
    ):"No Pending Tasks!"}
  </main>
  );
};

export default PendingTasks;
