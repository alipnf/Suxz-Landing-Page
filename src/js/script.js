const tham = document.querySelector(".tham");
const navmenu = document.querySelector("#navbar");
tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  navmenu.classList.toggle("hidden");
});

const navLinks = document.querySelectorAll("#navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    tham.classList.remove("tham-active");
    navmenu.classList.add("hidden");
  });
});
