  // 1. Ініціалізуємо карту
  const map = L.map('map').setView([48.5079, 32.2623], 13); // Кропивницький

  // 2. Додаємо шари OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href=\"https://openstreetmap.org\">OpenStreetMap</a> contributors'
  }).addTo(map);

  // 3. Початковий маркер
  L.marker([48.5079, 32.2623])
    .addTo(map)
    .bindPopup('Кропивницький 🌟')
    .openPopup();

  // 4. Функція переміщення карти
  function goToCity(lat, lng, cityName) {
    // Плавне переміщення карти
    map.flyTo([lat, lng], 13, { animate: true, duration: 1.2 });

    // Відкрити попап
    L.popup({ autoClose: true, closeOnClick: true })
      .setLatLng([lat, lng])
      .setContent(`<b>${cityName}</b>`)
      .openOn(map);
  }

  // 5. Обробка натискання на посилання
  document.querySelectorAll('.map-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // скасовує стандартну поведінку

      const lat = parseFloat(link.dataset.lat);
      const lng = parseFloat(link.dataset.lng);
      const city = link.dataset.city || 'Невідоме місце';

      goToCity(lat, lng, city);

      // 6. Плавно прокручуємо сторінку до карти
      const mapElement = document.getElementById('map');
      mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // 7. Після прокрутки фокус встановлюємо на карту (для доступності)
      setTimeout(() => {
        mapElement.focus({ preventScroll: true });
      }, 800);
    });
  });