// Fetch the token from localStorage or wherever it is stored
const token = localStorage.getItem('token');

// Set up the fetch request
fetch('http://10.12.14.121:8000', {
  method: 'GET', // Assuming you're fetching data
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '' // Include token if available
  }
})
  .then(response => {
    console.log('Response:', response);  // Log the response object
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);  // Log the data received from the backend
    const container = document.querySelector('.cards');
    
    data.forEach(item => {
      const html = `
        <div class="card">
          <div class="image">
            <img src="/public/images/iStock-479719152.jpg" alt="${item.name}">
          </div>
          <div class="text">
            <h2>${item.team}</h2>
            <h3>${item.name} - ${item.age} years old</h3>
            <p>${item.description}</p>
          </div>
        </div>
      `;
      const cardElement = document.createElement('div');
      cardElement.innerHTML = html;
      container.appendChild(cardElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
