
let moviment = document.querySelector('#move');

   moviment.addEventListener('mousemove', (event) => {

   let move2 = (event.clientX * 0.002);

   move.style.transform = `translateX(-${move2}%)`;
   

});

        