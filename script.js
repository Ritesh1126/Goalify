function opencard(){
    const AllBox = document.querySelectorAll(".box");
const AllFullBox = document.querySelectorAll(".fullbox");
const Back = document.querySelectorAll(".back");


AllFullBox.forEach(page => page.style.display = "none");

AllBox.forEach((box,index)=>{
        box.addEventListener("click" , ()=>{
            AllFullBox.forEach(page => page.style.display = "none");
            AllFullBox[index].style.display = "block";
            AllFullBox[index].scrollIntoView({ behavior: "smooth" });
        });
});

Back.forEach(btn=>{
    btn.addEventListener("click", ()=>{
            const parentbtn = btn.closest(".fullbox")
            parentbtn.style.display = "none";
            document.querySelector(".container").scrollIntoView({ behavior: "smooth" });  // isse smoothly back ho jayega 
    })
})
}

opencard(); // funtion call hoga to function run hoga 

