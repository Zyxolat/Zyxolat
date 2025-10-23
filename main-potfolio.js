const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const darkToggle = document.getElementById("darkModeToggle");
const modeIcon = document.getElementById("modeIcon");
const textMode = document.getElementById("textMode");

toggleBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("collapsed");
    
});


darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if(textMode.innerHTML === "Dark Mode"){
        textMode.innerText = "Light Mode"
    }else{
        textMode.innerText = "Dark Mode";
    }

  if (document.body.classList.contains("dark")) {
    modeIcon.classList.replace("bx-sun", "bx-moon");
  } else {
    modeIcon.classList.replace("bx-moon", "bx-sun");
  }
});



