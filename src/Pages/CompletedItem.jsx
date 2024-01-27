import React from 'react';
import { useStore } from '../store';
import '../styles/completeditem.css';
import { sortByDueDate, sortByPriority } from '../Helpers/sortHelpers';

const CompletedTasks = () => {
  const { items, setItems } = useStore();

  const handleSortByDueDate = () => {
    const sortedItems = sortByDueDate(items);
    setItems(sortedItems);
  };
  
  const handleSortByPriority = () => {
    const sortedItems = sortByPriority(items);
    setItems(sortedItems);
  };
  

  // Filter completed tasks
  const completedTasks = items.filter((task) => task.checked);

  return (
    <main>
      <h3>Completed Tasks</h3>
      <div>
        <button onClick={handleSortByDueDate}>Sort by Due Date</button>
        <button onClick={handleSortByPriority}>Sort by Priority</button>
      </div>
      {completedTasks.length > 0 ?  (
        <table className="task-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((item) => (
              <tr key={item.id}>
                <td>{item.item}</td>
                <td>{item.priority}</td>
                <td>{item.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ):"No Completed Tasks"}
    </main>
  );
};

export default CompletedTasks;
