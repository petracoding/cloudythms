$(function(){
    $("#scrolltotop").click(function(){        
        $("html, body").animate({scrollTop : 0}, 500);
    });
});
$(window).scroll(function(){
    if (document.body.scrollTop > 20
        || document.documentElement.scrollTop > 20) {
        $("#scrolltotop").css("opacity","1");
    } else {
        $("#scrolltotop").css("opacity","0");
    }
});
