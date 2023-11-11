document.addEventListener("DOMContentLoaded", function() {
    const openingHours = [
      { day: 1, open: 9, close: 18 },
      { day: 2, open: 9, close: 18 },
      { day: 3, open: 9, close: 18 },
      { day: 4, open: 9, close: 18 },
      { day: 5, open: 9, close: 18 },
      { day: 6, open: 9, close: 15 }
    ];
  
    const currentDay = new Date().getDay();
    const currentHour = new Date().getHours();
  
    const todayOpening = openingHours.find(item => item.day === currentDay);
  
    if (todayOpening) {
      const isOpen = currentHour >= todayOpening.open && currentHour < todayOpening.close;
      const statusElement = document.getElementById("status");
      statusElement.textContent = isOpen ? "Estamos Abertos" : "Estamos Fechados";
    }
  });