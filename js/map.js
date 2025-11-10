  // 1. Створюємо карту і вказуємо координати (широта, довгота)
  const map = L.map('map').setView([48.5079, 32.2623], 13); // Кропивницький
  // const hong = L.map('map').setView([22.3193, 114.1694], 13); // Гонконг


  // 2. Додаємо шари OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  // 3. Додаємо маркер
  L.marker([48.5079, 32.2623])
    .addTo(map)
    .bindPopup('Моє місце 🌟')
    .openPopup();


