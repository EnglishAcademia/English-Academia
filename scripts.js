document.addEventListener("DOMContentLoaded", () => {
  const calendarToggleBtn = document.getElementById('calendar-toggle');
const calendarSidebar = document.querySelector('.calendar-sidebar');

calendarToggleBtn.addEventListener('click', () => {
  calendarSidebar.classList.toggle('visible');
});

