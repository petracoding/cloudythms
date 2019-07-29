/*
	Less Annoying Post Links
	Tumblr Plugin by Cloudythms
	https://cloudythms.tumblr.com/post/176259565164/
*/
(function($) {
    $.fn.shorterPostURLs = function() {
        return this.each(function() {
            
            var url = $(this).attr("href");
            var pos1 = url.search(/\/post\/\d+\//i);
            if(pos1 != -1){
                var ugly = url.substring(pos1+6);
                var pos2 = ugly.search(/\//);
                ugly = ugly.substring(pos2+1);
                url = url.replace(ugly, '');
                $(this).attr("href", url);
            }
        });
    };
}(jQuery));
