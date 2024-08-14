$(function(){
    $(".memu>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })

    // 이미지슬라이드 영역

    $(".fade li").eq(0).siblings().hide(); 
    // 모든 li 포지션을 앱솔로 해서 마지막 그림이 맨 위에 보여서 첫번째 그림이 보이도록 설정
    let n = 0; // 0 1 2 현재 보이는 li 번호
    let count = $(".fade li").length -1; //li의 전체 갯수 셀때 length = 몇개인지 찾아준다.

    setInterval(fadeInOut , 2000);

    function fadeInOut(){

        if( n == count){
        // 0 == 2
            n=0;
        }else{
            n++;
        }
        console.log(n) // 지금 보이는 n => fade in

        $(".fade li").eq(n).fadeIn().siblings().fadeOut();

    }//

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