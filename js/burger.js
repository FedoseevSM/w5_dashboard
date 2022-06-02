const burgerHeader = document.querySelector(".header__account_burger")
const burgerSidebar = document.querySelector(".sidebar__logo_burger")
const sidebar = document.querySelector(".sidebar")

burgerHeader.addEventListener("click", function () {
  if (sidebar.classList.contains("_burger-active")) {
    sidebar.classList.remove("_burger-active")
    document.getElementsByTagName("body")[0].style.overflow = "auto"
  } else {
    sidebar.classList.add("_burger-active")
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  }
})

burgerSidebar.addEventListener("click", function () {
  if (sidebar.classList.contains("_burger-active")) {
    sidebar.classList.remove("_burger-active")
    document.getElementsByTagName("body")[0].style.overflow = "auto"
  } else {
    sidebar.classList.add("_burger-active")
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  }
})
