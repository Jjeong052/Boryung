$(document).ready(function(){

  var newsSlide = new Swiper(".newsSlide", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop : true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  });
  
  $(".news-play").hide();  
  $(".news-pause").click(function(){
      newsSlide.autoplay.stop();                       
    $(this).hide();
    $(".news-play").show();
  });
  $(".news-play").click(function(){
      newsSlide.autoplay.start();                    
    $(this).hide();
    $(".news-pause").show();
  });

  //newspaper
  var newsPaper = new Swiper(".newsPaper", {
    direction: "vertical",
    loop : true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
    

  //brandstory
  $(".brandstory .earth li").first().addClass("active");

  $(".brandstory .earth li").hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });

  //product
  var productS = new Swiper(".productS", {
    loop : true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },

  }); 




});