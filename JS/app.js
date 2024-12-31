let toplast = document.querySelector(".toplast");
let nav_main = document.querySelector(".nav_main");


toplast.addEventListener("click", ()=>{
    window.scrollTo({top:0, behavior: 'smooth'});
});
window.addEventListener("scroll", ()=>{
   let scrolltop = this.window.scrollY;
   if(scrolltop > 50){
    toplast.style.display= "block";
   }else{
    toplast.style.display= "none";
   }
   
   if(scrolltop > 20){
    nav_main.classList.add("bg");
   }else{
    nav_main.classList.remove("bg");
   }
});
