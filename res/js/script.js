$(function(){
  windowResizeFunc();
})

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
    //끝나면 반복종료
    typingBool = false;
    clearInterval(tyInt);
  } 
}  

const closeNoticePopup = function(obj){
  console.log("obj", obj);
  $(obj).fadeOut(400);
  $(".introBox").show();

  setTimeout(() => {
    if(typingBool==false){ 
      // 타이핑이 진행되지 않았다면 
      typingBool=true;
      tyInt = setInterval(typing,150); // 반복동작 
    }
  }, 1000);

  setTimeout(() => {
    $(".introWrapper").fadeOut(600);
  }, 2000, $("body").removeClass("scrollDisable"));
}

$(window).on("scroll", function(){
  var scTop = $(window).scrollTop();
  var htmlHeight = $("body").height() - $(window).height();

  $(".scrollBar").css("width", `${(scTop / htmlHeight) * 100}%`);

  let $productTumb = $(".productTumb").not(".productTumb.popup");

  if((scTop + $(".header").height()) >= $(".productWrap").offset().top - $(".header").height()){
    $productTumb.addClass("fixed");
    $productTumb.removeClass("bottom");
  } else {
    $productTumb.removeClass("fixed");
    $productTumb.removeClass("bottom");
  }

  if(scTop >= $(".sec02").offset().top + ($(".sec02").height() - $(window).height() + $(".header").height())){
    $productTumb.removeClass("fixed");
    $productTumb.addClass("bottom");
  }
});

$(window).on("resize", windowResizeFunc = function(){
  if($(window).innerWidth() <= 1200){
    $(".productTumb").addClass("popup");
  } else {
    $(".productTumb").removeClass("popup");
  }
});

const openThumbPopup = function(popIdx){
  if($(window).innerWidth() <= 1200){
    $(".productTumb.popup").addClass("on");
    $(".dim").addClass("on");
    $("body").addClass("scrollDisable");
  }
}

const closeTumbPopup = function(obj){
  obj.removeClass("on");
  $(".dim").removeClass("on");
  $("body").removeClass("scrollDisable");
}
