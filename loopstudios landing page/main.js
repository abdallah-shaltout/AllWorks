let btn = document.querySelector(".navbar-toggler");
let list = document.querySelector("ul.nav");
let links = document.querySelectorAll("ul.nav .nav-item .nav-link");
btn.addEventListener("click", function () {
  this.classList.toggle("active");
  list.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    btn.classList.remove("active");
    list.classList.remove("active");
  });
});
