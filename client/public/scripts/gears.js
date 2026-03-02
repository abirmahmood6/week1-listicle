// public/scripts/gears.js
const renderGears = async () => {
  try {
    const response = await fetch('/gears'); // Fetch gear data from your server
    const data = await response.json();

    const mainContent = document.getElementById('main-content');

    if (data && data.length) {
      // Clear previous content if any
      mainContent.innerHTML = '';

      data.map(gear => {
        // Create card container
        const card = document.createElement('div');
        card.classList.add('card');

        // Top container with background image
        const topContainer = document.createElement('div');
        topContainer.classList.add('top-container');
        topContainer.style.backgroundImage = `url(${gear.image})`;

        // Bottom container with text info
        const bottomContainer = document.createElement('div');
        bottomContainer.classList.add('bottom-container');

        const name = document.createElement('h3');
        name.textContent = gear.name;
        bottomContainer.appendChild(name);

        const pricePoint = document.createElement('p');
        pricePoint.textContent = 'Price: ' + gear.pricePoint;
        bottomContainer.appendChild(pricePoint);

        const audience = document.createElement('p');
        audience.textContent = 'Great For: ' + gear.audience;
        bottomContainer.appendChild(audience);

        // Read more link
        const link = document.createElement('a');
        link.textContent = 'Read More >';
        link.href = `/gears/${gear.id}`;
        link.setAttribute('role', 'button');
        bottomContainer.appendChild(link);

        // Assemble card
        card.appendChild(topContainer);
        card.appendChild(bottomContainer);

        // Append card to main content
        mainContent.appendChild(card);
      });
    } else {
      // No gears available message
      mainContent.innerHTML = '';
      const message = document.createElement('h2');
      message.textContent = 'No Gears Available 😞';
      mainContent.appendChild(message);
    }
  } catch (err) {
    console.error('Error fetching gears:', err);
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    const message = document.createElement('h2');
    message.textContent = 'Error loading gears 😞';
    mainContent.appendChild(message);
  }
};

// --- NEW: URL check for 404 ---
const requestedURL = window.location.pathname.replace(/^\/+/, ''); // removes leading "/"

if (requestedURL && requestedURL !== '' && requestedURL !== 'index.html') {
  // User navigated to an unknown path → show 404 page
  window.location.href = '/404.html';
} else {
  // On home page → render gears
  renderGears();
}