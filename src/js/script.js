const tham = document.querySelector(".tham");
const navmenu = document.querySelector("#navbar");
tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  navmenu.classList.toggle("hidden");
});
