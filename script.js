document.querySelectorAll(".box").forEach(box=>{
    box.addEventListener("click" , ()=>{
        const link = box.getAttribute("data-link");
        if (link) window.location.href = link;
    })
});