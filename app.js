function och(){
    let ruyxat = document.getElementById('ruyxat');
    ruyxat.style.visibility = 'visible';
 }
 
 
 function yop(){
    let yop = document.getElementById('x');
    ruyxat.style.visibility = 'hidden';
 }
 
 
 const boxes = document.querySelectorAll('.box');
 window.addEventListener('scroll' , checkboxes)
 checkboxes()
 
 
 function checkboxes(){
     const triggerBotton = window.innerHeight / 5 * 4
 
     boxes.forEach(box =>{
         const boxTop = box.getBoundingClientRect().top
         if(boxTop < triggerBotton){
             box.classList.add('show')
 
         }else{
             box.classList.remove('show')
         }
     });
 }