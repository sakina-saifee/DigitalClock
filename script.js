
var digitalClock= setInterval(clock, 1000);

    
function clock(){
    const date = new Date();
    var currentHour=date.getHours();
    var currentMin=date.getMinutes();
    var currentSec=date.getSeconds();
  
        
        const secondhand=document.querySelector('.second-hand');
const secdegrees=((date.getSeconds()/60) *360)+90;
        console.log("The sec degreees of yb method" + secdegrees);
        secondhand.style.transform=`rotate(${secdegrees}deg)`;

           
        const minhand=document.querySelector('.min-hand');
const mindegrees=((date.getMinutes()/60) *360)+90;
        console.log("The sec degreees of yb method" + mindegrees);
        minhand.style.transform=`rotate(${mindegrees}deg)`;

        const hourhand=document.querySelector('.hour-hand');
const hourdegrees=((date.getHours()/60) *360)+90;
        console.log("The hour degreees of yb method" + hourdegrees);
        hourhand.style.transform=`rotate(${hourdegrees}deg)`;

    }
      