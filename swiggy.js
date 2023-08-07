/*$('.item-2').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('myClickState');
  });
*/

const text=document.querySelector(".greet");  
 

const textLoad=()=>{
    setTimeout(()=>{
    text.textContent="Unexpected guests?";
},2000);
setTimeout(()=>{
    text.textContent="Cooking gone wrong?";
},4000);
setTimeout(()=>{
    text.textContent="Movie marathon?";
},6000);
setTimeout(()=>{
    text.textContent="Late night at office?";
},8000);
setTimeout(()=>{
    text.textContent="Hungry?";
    textLoad();
},10000);

}
textLoad();