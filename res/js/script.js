const productObj = [
  {
    title: "아이유 참 좋다",
    duration: "1993.05.16 ~",
    siteLink: "https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%9C%A0",
    type: "test",
    contribution: ["test", "아이유 대존예"],
    special: "test",
    github: [{is: false, link: "javascript:void(0);"}],
    thumbnail: "https://cdn.cashfeed.co.kr/attachments/2cb0a575ee.jpg"
  },
  {
    title: "스마트스토어[PC]",
    duration: "2022.10 ~ 2022.12",
    siteLink: "https://www.smartchoice.or.kr/",
    type: "노스글로벌 재직 당시 사이트 PC 디자인 리뉴얼",
    contribution: ["퍼블리싱 100%"],
    special: "접근성 뱃지 취득",
    github: [{is: false, link: "javascript:void(0);"}],
    thumbnail: "/res/img/product_thumb/smartchoice_screenshot.png"
  },
  {
    title: "똥피하기 게임[PC]",
    duration: "2020.10.22 ~ 2020.10.25",
    siteLink: "https://sunho5810.github.io/avoidPoopGame/",
    type: "개인 프로젝트",
    contribution: ["전체 100%"],
    special: "Vanilla JS로 제작",
    github: [{is: true, link: "https://github.com/sunho5810/avoidPoopGame"}],
    thumbnail: "/res/img/product_thumb/avoidPoop_screenshot.png"
  }
]

const productFunc = function(obj){
  var str = "";

  str += `<li class="prodItem">`;
  str += `  <div class="prodItem__info">`;
  str += `    <div class="prodTitWrap">`;
  str += `      <a href="${obj.siteLink}" class="prodItem__link" title="${obj.title} 프로젝트 링크 가기" target="_blank">`
  str += `        <p class="prodItem__link__p">${obj.title}</p>`
  str += `        <span class="prodItem__link__icon"></span>`
  str += `      </a>`;
  str += `      <p class="duration">${obj.duration}</p>`;
  str += `    </div>`;
  str += `    <dl class="prodItem__dl">`;
  str += `      <dt class="prodItem__dt">프로젝트 종류</dt>`;
  str += `      <dd class="prodItem__dd">${obj.type}</dd>`;
  str += `    </dl>`;
  str += `    </dl>`;
  str += `    <dl class="prodItem__dl">`;
  str += `      <dt class="prodItem__dt">특이사항</dt>`;
  str += `      <dd class="prodItem__dd">${obj.special}</dd>`;
  str += `    </dl>`;
  str += `    <dl class="prodItem__dl">`;
  str += `      <dt class="prodItem__dt">기여도</dt>`;
  str += `      <dd class="prodItem__dd">`;
  for(var i = 0; i < obj.contribution.length; i++){
    str += `<span class="badge">${obj.contribution[i]}</span>`
  }
  str += `      </dd>`;
  if(obj.github[0].is){
    str += `    <div class="prodItem__refBox">`;
    str += `      <a href="${obj.github[0].link}" title="${obj.title} 깃허브 링크 바로가기" target="_blank" class="refIcon refIcon--github"></a>`;
    str += `    </div>`;
  }
  str += `  </div>`;
  str += `  <div class="prodItem__thumb" style="background-image: url(${obj.thumbnail})" title="클릭 시 썸네일 보기" onclick="openThumbPopup('${obj.thumbnail}');"></div>`;
  str += `</li>`;
  
  $(".productList").append(str);
}

$(function(){
  windowResizeFunc();

  // $(".productThumb__img").attr("src", productObj[0].thumbnail);
  $(".productThumb").css("background-image", `url(${productObj[0].thumbnail})`);

  for(var i = 0; i < productObj.length; i++){
    productFunc(productObj[i]);
  }

  
});

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
  window.scroll({behavior: 'smooth'});

  var scTop = $(window).scrollTop();
  var htmlHeight = $("body").height() - $(window).height();

  $(".scrollBar").css("width", `${(scTop / htmlHeight) * 100}%`);

  let $productThumb = $(".productThumb").not(".productThumb.popup");

  if((scTop + $(".header").height()) >= $(".productWrap").offset().top - $(".header").height() + 80){
    $productThumb.addClass("fixed");
    $productThumb.removeClass("bottom");
  } else {
    $productThumb.removeClass("fixed");
    $productThumb.removeClass("bottom");
  }

  if(scTop >= $(".sec02").offset().top + ($(".sec02").height() - $(window).height() + $(".header").height())){
    $productThumb.removeClass("fixed");
    $productThumb.addClass("bottom");
  }
});

$(window).on("resize", windowResizeFunc = function(){
  if($(window).innerWidth() <= 1200){
    $(".productThumb").addClass("popup");
  } else {
    $(".productThumb").removeClass("popup");
  }
});

const openThumbPopup = function(imgsrc){
  if($(window).innerWidth() <= 1200){
    $(".productThumb.popup").addClass("on");
    $(".productThumb").css("background-image", `url(${imgsrc})`)
    $(".dim").addClass("on");
    $("body").addClass("scrollDisable");
  } else {
    $(".productThumb").css("background-image", `url(${imgsrc})`);
  }
}

const closeTumbPopup = function(obj){
  $(obj).removeClass("on");
  $(".dim").removeClass("on");
  $("body").removeClass("scrollDisable");
}

const goTop = function(){
  window.scroll({behavior: 'auto'});
  $('html, body').animate( { scrollTop : 0 }, 400);
}