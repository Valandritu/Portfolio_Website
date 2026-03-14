document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return; // prevents error on pages without button

  const icon = toggleBtn.querySelector("i");

  // Apply saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
    }
  });
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const icon = document.querySelector("#theme-toggle i");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});




