$(document).ready(function(){



    //mgnb-wrap

    $(".mgnb-wrap-bg").hide();
    $(".utill .ham").click(function(){
        $(".mgnb-wrap").delay(200).animate({"right":"0"});
        $(".mgnb-wrap-bg").stop().fadeIn();
    });

    $(".mgnb-close").click(function(){
        $(".mgnb-wrap").delay(200).animate({"right":"-100%"});
        $(".mgnb-wrap-bg").stop().fadeOut();
    });
        
    $(".mdepth2").hide();
    $(".m-gnb > li").click(function(){
        $(this).children(".mdepth2").stop().slideToggle();
    });

    $(".mdepth3").hide();
    $(".mdepth2 > li").click(function(){
        $(this).children(".mdepth3").stop().slideToggle();
    });


    //gnb
    $(".depth2, .gnb-bg").hide();
    $("header").mouseenter(function(){
        $(".depth2, .gnb-bg").stop().slideDown();
        
    });
    $("header").mouseleave(function(){
        $(".depth2, .gnb-bg").stop().slideUp();
    });

    //kor,eng
    $("header .lang > a").first().addClass("active");

    $("header .lang > a").click(function(){
        // $(this).addClass("active").siblings().removeClass("active");
        $(this).toggleClass("active").siblings().removeClass("active"); 
    });

    


    

});