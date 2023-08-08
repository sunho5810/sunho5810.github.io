var typingBool = false; 
var typingIdx = 0; 

// 타이핑될 텍스트를 가져온다 
var typingTxt = "5810"; 

var tyInt = null;

typingTxt = typingTxt.split(""); // 한글자씩 자른다. 

function typing(){ 
  if(typingIdx < typingTxt.length){ 
    // 타이핑될 텍스트 길이만큼 반복 
    $(".introBox").append(typingTxt[typingIdx]);
    // 한글자씩 이어준다. 
    typingIdx++; 
  } else{ 
    console.log("end");
    //끝나면 반복종료
    typingBool = false;
    clearInterval(tyInt);
    setTimeout(() => {
      $(".introWrapper").fadeOut(600);
    }, 1000, $("body").removeClass("scrollDisable"));
  } 
}  

$(function(){
  setTimeout(() => {
      if(typingBool==false){ 
      // 타이핑이 진행되지 않았다면 
      typingBool=true;
      tyInt = setInterval(typing,150); // 반복동작 
    }
  }, 1000);
  
});