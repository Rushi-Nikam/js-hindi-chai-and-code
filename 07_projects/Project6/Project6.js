const ramdomColor = function(){
    const hex = '0123456ABCDEF';
    let Color = "#";
    for(let i=0;i< 6;i++){
     Color += hex[Math.floor(Math.random() * 16)]
    
    }
    return Color;
  };
  let changingcolor;
  const StartChaning = function(){
    if(!changingcolor){
      changingcolor =  setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
      
      document.body.style.backgroundColor = ramdomColor();
    }
    
  }
  const stopChaning= function(){
    clearInterval(changingcolor)
    changingcolor = null;
  }
  document.querySelector('#start').addEventListener('click',StartChaning);
  document.querySelector('#stop').addEventListener('click',stopChaning);
  