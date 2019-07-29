// SCRIPT HELPER by Cloudythms
// => https://cloudythms.tumblr.com/post/todo
// v 0.0.0

// Include like so:
// <script src="https://cdn.jsdelivr.net/gh/petracoding/tumblr/cloudythms/plugins/helper.js"></script>
// requires jQuery!

$(document).ready(function() {
    $('body').addClass('-loaded');
});

$(window).bind('load', function() {
    $('body').addClass('-loaded-images');
});
