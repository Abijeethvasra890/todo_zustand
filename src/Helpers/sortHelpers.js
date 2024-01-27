export const sortByDueDate = (items) => {
    const uncompletedTasks = items.filter((task) => !task.checked);
    // Sort tasks by due date
    const sortedTasks = [...uncompletedTasks].sort((a, b) => {
      if (a.dueDate < b.dueDate) return -1;
      if (a.dueDate > b.dueDate) return 1;
      return 0;
    });
    return [...sortedTasks, ...items.filter((task) => task.checked)];
  };
  
  export const sortByPriority = (items) => {
    const uncompletedTasks = items.filter((task) => !task.checked);
    
    const sortedTasks = [...uncompletedTasks].sort((a, b) => {
      // Assuming priority is a string like 'P0', 'P1', 'P2'
      return a.priority.localeCompare(b.priority);
    });
  
    return [...sortedTasks, ...items.filter((task) => task.checked)];
  };
  