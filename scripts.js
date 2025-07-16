document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("calendar-toggle");
  const calendarSidebar = document.querySelector(".calendar-sidebar");

  toggleBtn.addEventListener("click", () => {
    if (!calendarSidebar) return;

    calendarSidebar.classList.toggle("hidden");
  });
});
