// SCRIPT HELPER by Cloudythms
// => https://cloudythms.tumblr.com/post/todo
// v 0.0.0

// Include like so:
// <script src="https://cdn.jsdelivr.net/gh/petracoding/tumblr/cloudythms/plugins/helper.js"></script>
// requires jQuery!

// ----------------------------------------------------

let scrollToTopMs = 500;
let scrollToTopBreakpoint = 20;

// ----------------------------------------------------

// Add classes to body

$(document).ready(function() {
    $('body').addClass('-loaded');
});

$(window).bind('load', function() {
    $('body').addClass('-loaded-images');
});

// Scroll To Top

$(function(){
    $("#scrolltotop").click(function(){        
        $("html, body").animate({scrollTop : 0}, scrollToTopMs);
    });
});

$(window).scroll(function(){
    if (document.body.scrollTop > scrollToTopBreakpoint
        || document.documentElement.scrollTop > scrollToTopBreakpoint) {
        $("#scrolltotop").css("opacity","1");
    } else {
        $("#scrolltotop").css("opacity","0");
    }
});
