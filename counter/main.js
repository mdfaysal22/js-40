let defaultNum = 0;

// Selected Value and Button : 
const value = document.querySelector("#num");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
   btn.addEventListener("click", (e) => {
    const classList = e.currentTarget.classList;
    if(classList.contains("decrease")){
       defaultNum--;
    }
    if(classList.contains("reset")){
        defaultNum = 0;
    }
    if(classList.contains("increase")){
        defaultNum++;
    }
    value.textContent = defaultNum;
   })
})