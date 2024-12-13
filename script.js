fetch('http://10.12.14.121/')  // Your backend endpoint that returns JSON data
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    const container = document.querySelector('.cards');  // Use querySelector for a single container

    // Loop through each item in the data
    data.forEach(item => {
        // HTML string for each card
        const html = `
          <div class="card">
            <div class="image">
              <img src="images/iStock-479719152.jpg" alt="${item.name}">
            </div>
            <div class="text">
              <h2>${item.team}</h2>
              <h3>${item.name} - ${item.age} years old</h3>
              <p>${item.description}</p>
            </div>
          </div>
        `;

        // Create a new div element to insert the card HTML
        const cardElement = document.createElement('div');
        cardElement.innerHTML = html;

        // Append the card to the container
        container.appendChild(cardElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
