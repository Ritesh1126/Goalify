const AllBox = document.querySelectorAll(".box");
const AllFullBox = document.querySelectorAll(".fullbox");

AllFullBox.forEach(page => page.style.display = "none");

AllBox.forEach((box,index)=>{
        box.addEventListener("click" , ()=>{
            AllFullBox.forEach(page => page.style.display = "none");
            AllFullBox[index].style.display = "block";
            AllFullBox[index].scrollIntoView({ behavior: "smooth" });
        });
});