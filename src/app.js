function changeTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  }
  
  const themeButton = document.querySelector(".dark-theme-btn");
  themeButton.addEventListener("click", changeTheme);