


function StopWatch (){

    let ms = 0;
    let s = 0;
    let min = 0;
    let interval ;
    function currentTime(){
        return `${min<10?'0'+min:min}:${s<10?'0'+s:s}:${ms}`;
    }

    
    
    let timer = document.getElementById('timer');
    let lapContainer = document.querySelector('#lap-container');

   


  
    let counter = function (){
        ms++;
        if(ms>99){
            s++;
            ms = 0 ;
        }
        if(s>59){
            min++;
            s = 0;
        }

         timer.innerHTML = currentTime();
        
    }


    this.start =  function(){
 
        interval = setInterval(counter,10);
 
     }
 
     this.stop = function(){
 
        clearInterval(interval);

       
     }
 
      this.lap = function(){
          let lap = document.createElement('h4');
          lap.innerHTML = currentTime()
          lapContainer.appendChild(lap)
        

     }
 
     this.restart = function(){
        timer.innerText= "00:00:00"
        lapContainer.innerHTML = "";
        clearInterval(interval)
    
 
     }
 }