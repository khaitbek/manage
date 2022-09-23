const hamburgerBtn = document.querySelector("#hamburgerBtn"),
      primaryNavigation = document.querySelector("#primaryNavigation");

hamburgerBtn.addEventListener("click",()=>{
    hamburgerBtn.classList.toggle("open")
    primaryNavigation.classList.toggle("show")
})