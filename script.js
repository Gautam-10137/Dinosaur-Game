let score=0;
let cross=true;
 let music1=new Audio('music.mp3');
 let overmusic=new Audio('overgame.mp3');
setTimeout(()=>{
   music1.play(); 
},100);
document.onkeydown=function(e){
  console.log("your key code is: ", e.keyCode)
  if(e.keyCode==38){
     dino=document.querySelector(".dino")
     dino.classList.add("animateDino")
     setTimeout(() => {
        dino.classList.remove("animateDino")
     }, 800);
    
  }
   if(e.keyCode==39){
   dino=document.querySelector('.dino');
   dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinoX+90+'px';
}
if(e.keyCode==37){
   dino=document.querySelector('.dino');
   dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
     dino.style.left=(dinoX- 80)+'px';
}
}
setInterval(()=>{
   dino=document.querySelector('.dino');
   gameOver=document.querySelector('.gameOver');
   obstacle=document.querySelector('.obstacle');

   dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
   dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

   ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
   oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

  OffsetX=Math.abs(dx-ox);
   OffsetY=Math.abs(dy-oy);
   // console.log(OffsetX);
   if(OffsetX<120 && OffsetY<50){
      obstacle.style.animationPlayState= 'paused';
      // obstacle.classList.remove('obstacleDino');
      
      gameOver.innerHTML="Game Over! -Reset to play again";
      overmusic.play();
      music1.pause();
      setTimeout(() => {
         overmusic.pause();
         
      }, 5000);
      // overmusic.pause();   
      document.querySelector('.sad').getElementsByTagName('img')[0].style.width="160px";
      document.onkeydown = (evt) => {
         const cancelKeypress = /^(37|38|39|40)$/.test(evt.keyCode.toString());
         if (cancelKeypress) {
           evt.preventDefault()
         }
       };
   } 
   else if(OffsetX<100 &&OffsetX>50 && cross){
      score+=5;
      updateScore(score);
      cross=false;
      setTimeout(() => {
         cross=true; 
      }, 900);
      setTimeout(() => {
         anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
          obstacle.style.animationDuration=(anidur -0.04 )+'s';
      }, 640);
   }
   
},50)
function updateScore(score){
     scoreCont=document.querySelector('.scoreCont');
      scoreCont.innerHTML="Your Score : "+score;
}
