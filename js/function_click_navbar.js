const btn_open_menu = document.getElementById("btn_open_menu");
const list_menu = document.getElementById("list_menu");

let active = false; 

btn_open_menu.addEventListener("click", () => {
  if (!active) {
   
    list_menu.style.transform = "translateX(0)"; 
    list_menu.style.opacity = "1";                
  } else {

    list_menu.style.transform = "translateX(100%)"; 
    list_menu.style.opacity = "0"; 
  }

  active = !active; 
});






