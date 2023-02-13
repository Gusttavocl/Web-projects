let move = document.getQuerySelector('#move');
move.addEventListener("mousemove", (event)=>{
   let move = (event.clientX * 3);
   move.style.transform = `translateX(${move}%)`;

})
