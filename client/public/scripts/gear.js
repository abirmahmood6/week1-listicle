// Render a single gear detail page
const renderGear = async () => {
  try {
    // Get the gear ID from the URL query: gear.html?id=3
    const urlParams = new URLSearchParams(window.location.search);
    const requestedID = parseInt(urlParams.get('id'));

    // Fetch all gears from server
    const response = await fetch('/gears');
    const data = await response.json();

    const gearContent = document.getElementById('gear-content');
    let gear;

    if (data && data.length) {
      gear = data.find(item => item.id === requestedID);
    }

    if (gear) {
      document.getElementById('image').src = gear.image;
      document.getElementById('name').textContent = gear.name;
      document.getElementById('submittedBy').textContent = 'Submitted by: ' + (gear.submittedBy || 'Unknown');
      document.getElementById('submittedOn').textContent = 'Submitted on: ' + (gear.submittedOn || 'Unknown');
      document.getElementById('pricePoint').textContent = 'Price: ' + gear.pricePoint;
      document.getElementById('audience').textContent = 'Great For: ' + gear.audience;
      document.getElementById('description').textContent = gear.description;

      document.title = `UnEarthed - ${gear.name}`;
    } else {
      const message = document.createElement('h2');
      message.textContent = 'No Gear Available 😞';
      gearContent.appendChild(message);
    }
  } catch (err) {
    console.error('Error fetching gear:', err);
  }
};

renderGear();