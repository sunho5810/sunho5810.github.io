const productObj = [
  // {
  //   title: "아이유 참 좋다",
  //   duration: "1993.05.16 ~",
  //   siteLink: "https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%9C%A0",
  //   type: "test",
  //   contribution: ["test", "아이유 대존예"],
  //   comment: "test",
  //   github: [{is: false, link: "javascript:void(0);"}],
  //   thumbnail: "https://cdn.cashfeed.co.kr/attachments/2cb0a575ee.jpg"
  // },
  {
    title: "스마트초이스[PC]",
    duration: "2022.10 ~ 2022.12",
    siteLink: "https://www.smartchoice.or.kr/",
    type: "노스글로벌 재직 중 사이트 PC 디자인 리뉴얼",
    contribution: ["퍼블리싱 100%"],
    comment: "접근성 마크 취득",
    github: [{is: false, link: "javascript:void(0);"}],
    thumbnail: "/res/img/product_thumb/smartchoice_screenshot.png"
  },
  {
    title: "똥피하기 게임[PC]",
    duration: "2020.10.22 ~ 2020.10.25",
    siteLink: "https://sunho5810.github.io/avoidPoopGame/",
    type: "개인 프로젝트",
    contribution: ["전체 100%"],
    comment: "Vanilla JS로 제작",
    github: [{is: true, link: "https://github.com/sunho5810/avoidPoopGame"}],
    thumbnail: "/res/img/product_thumb/avoidPoop_screenshot.png"
  },
  {
    title: "큐브플립[PC]",
    duration: "2020.10.20 ~ 2020.10.22",
    siteLink: "https://sunho5810.github.io/cubeFlip/",
    type: "개인 프로젝트",
    contribution: ["전체 100%"],
    comment: "jquery ui의 이벤트 함수들을 이용하여 큐브 플립 구현",
    github: [{is: true, link: "https://github.com/sunho5810/cubeFlip"}],
    thumbnail: "/res/img/product_thumb/cubeFlip_screenshot.png"
  },
  {
    title: "날씨앱[REACT]",
    duration: "2023.04.11",
    siteLink: "https://sunho5810.github.io/weather-app-redux/",
    type: "강의 실습",
    contribution: ["전체 100%"],
    comment: "api를 사용해 날씨 정보를 가져오는 실습",
    github: [{is: true, link: "https://github.com/sunho5810/weather-app-redux"}],
    thumbnail: "/res/img/product_thumb/weatherApp_screenshot.png"
  },
  {
    title: "H&M[REACT]",
    duration: "2023.04.05 ~ 2023.04.06",
    siteLink: "https://sunho5810.github.io/__REACT__hnm-react-router-practice/",
    type: "강의 실습",
    contribution: ["전체 100%"],
    comment: "H&M사이트 제품 검색, api활용 등 사용하여 간략히 구성",
    github: [{is: true, link: "https://github.com/sunho5810/__REACT__hnm-react-router-practice"}],
    thumbnail: "https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
  },
  {
    title: "뷰동산",
    duration: "2024.04.01 ~ 2024.04.05",
    siteLink: "https://sunho5810.github.io/vuedongsan/index.html",
    type: "강의 실습",
    contribution: ["전체 100%"],
    comment: "코딩에플 vue강의 중 상품 진열 및 상세페이지 노출 실습",
    github: [{is: true, link: "https://github.com/sunho5810/vuedongsan"}],
    thumbnail: "https://images.velog.io/images/taese0ng/post/82c7a9ee-7d30-44eb-be74-6814dd66b64c/logo-vuejs-min.png"
  },
  {
    title: "뷰로그",
    duration: "2024.04.05 ~ 2024.04.08",
    siteLink: "https://sunho5810.github.io/vuelog/index.html",
    type: "강의 실습",
    contribution: ["전체 100%"],
    comment: "코딩에플 vue강의 중 실습 내용",
    github: [{is: true, link: "https://github.com/sunho5810/vuelog"}],
    thumbnail: "https://images.velog.io/images/taese0ng/post/82c7a9ee-7d30-44eb-be74-6814dd66b64c/logo-vuejs-min.png"
  },
  // {
  //   title: "넷플릭스[REACT]",
  //   duration: "2023.04.05 ~ 2023.04.06",
  //   siteLink: "https://sunho5810.github.io/sunhoflix/",
  //   type: "강의 실습",
  //   contribution: ["전체 100%"],
  //   comment: "영화 정보 api를 활용하여 영화 검색, 장르 구별 등등 기능 구현",
  //   github: [{is: true, link: "https://github.com/sunho5810/sunhoflix"}],
  //   thumbnail: "https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
  // },

]



const productFunc = function(obj){
  var str = "";

/* 
  <li class="prodItem">
    <div class="prodItem__info">
      <div class="prodTitWrap">
        <a href="javascript:void(0);" class="prodItem__link" title="프로젝트 링크 가기" target="_blank">아이유</a>
        <p class="duration">2022.07.14 ~ 2022.08.20</p>
      </div>
      <dl class="prodItem__dl">
        <dt class="prodItem__dt">프로젝트 종류</dt>
        <dd class="prodItem__dd">개인 프로젝트</dd>
      </dl>
      <dl class="prodItem__dl">
        <dt class="prodItem__dt">기여도</dt>
        <dd class="prodItem__dd"><span class="badge">퍼블리싱 100%</span><span class="badge">스크립트 100%</span></dd>
      </dl>
      <dl class="prodItem__dl">
        <dt class="prodItem__dt">특이사항</dt>
        <dd class="prodItem__dd">접근성 뱃지 취득</dd>
      </dl>
      <div class="prodItem__refBox">
        <a href="javascript:void(0);" class="refIcon refIcon--github"></a>
      </div>
    </div>
    <div class="prodItem__thumb" style="background-image: url(/res/img/product_thumb/smartchoice_screenshot.png)" onclick="openThumbPopup()"></div>
  </li>
*/

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
  str += `      <dt class="prodItem__dt">특징</dt>`;
  str += `      <dd class="prodItem__dd">${obj.comment}</dd>`;
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
  if($(window).innerWidth() <= 1440){
    $(".productThumb").addClass("popup");
  } else {
    $(".productThumb").removeClass("popup");
  }
});

const openThumbPopup = function(imgsrc){
  if($(window).innerWidth() <= 1440){
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

const openContact = function(obj){
  if(obj.hasClass("on")){
    obj.removeClass("on");
    $(".contactWrapper").removeClass("open");
    $(".contactWrap").fadeOut(200);
  } else{
    obj.addClass("on");
    $(".contactWrapper").addClass("open");
    setTimeout(() => {
      $(".contactWrap").fadeIn(400);
    }, 400);
  }
}