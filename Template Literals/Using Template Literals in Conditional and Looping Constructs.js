// Function to generate a report using template literals
function generateReport(data) {
    let report = '';
    data.forEach(item => {
      report += `
        <div class="item">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          ${item.status === 'completed' ? '<span class="completed">Completed</span>' : ''}
        </div>
      `;
    });
    return report;
  }
  
  // Example usage
  const data = [
    { title: 'Task 1', description: 'Description 1', status: 'completed' },
    { title: 'Task 2', description: 'Description 2', status: 'pending' },
    { title: 'Task 3', description: 'Description 3', status: 'completed' }
  ];
  console.log(generateReport(data));
  