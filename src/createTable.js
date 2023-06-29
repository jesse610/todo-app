function createTaskTable(tasks) {
    // Get the container element for the table
    const tableContainer = document.querySelector('.tasks');
  
    // Create the table element
    const table = document.createElement('table');
    table.id = 'task-items';
    table.classList.add('default-task-items');
  
    // Create the table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
  
    const headerTitles = ['Completed', 'Title', 'Description', 'Due Date', 'Priority', '', ''];
    headerTitles.forEach((title) => {
      const th = document.createElement('th');
      th.textContent = title;
      headerRow.appendChild(th);
    });
  
    thead.appendChild(headerRow);
  
    // Create the table body
    const tbody = document.createElement('tbody');
    tasks.forEach((task) => {
      const row = document.createElement('tr');
  
      // Create the checkbox column
      const checkboxCell = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkboxCell.appendChild(checkbox);
      row.appendChild(checkboxCell);
  
      // Create the task details columns
      const taskDetails = [task.title, task.description, task.dueDate, task.priority];
      taskDetails.forEach((detail) => {
        const cell = document.createElement('td');
        cell.textContent = detail;
        row.appendChild(cell);
      });
  
      // Create the edit and delete buttons columns
      const editCell = document.createElement('td');
      const editButton = document.createElement('button');
      editButton.type = 'button';
      editButton.textContent = 'edit';
      editCell.appendChild(editButton);
      row.appendChild(editCell);
  
      const deleteCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.textContent = 'delete';
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);
  
      // Add the row to the table body
      tbody.appendChild(row);
    });
  
    // Append the table header and body to the table
    table.appendChild(thead);
    table.appendChild(tbody);
  
    // Append the table to the container
    tableContainer.appendChild(table);
}

export {
    createTaskTable
}