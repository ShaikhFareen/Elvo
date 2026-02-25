//Javacript comments
let toggleBtn = document.getElementById("toggleBtn");
let sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("closed");
});

