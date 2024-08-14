$(function(){
    $(".memu>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })

    // 이미지슬라이드 영역

    let n = 0; // 0 1 2
    setInterval( leftmove ,2000)
    function leftmove(){
        if( n == 2){
            n=0;
        }else{
            n++;
        }

        pos = n * (-100) + "%";

        $(".fade").animate({left:pos} , 500)

    }// function

    //탭

    $(".tab h2").click(function(){
        $(".tab h2").removeClass("on");
        $(this).addClass("on")

        $(".tab ul").hide();
        $(this).next().css({display:"flex"})
    }) //

    $(".p_click").click(function(){
        $(".pop").fadeIn();
    })

    $(".close").click(function(){
        $(".pop").fadeOut();
    })


})