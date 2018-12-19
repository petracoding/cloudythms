(function($) {
	// tag whitelisting/blacklisting by cloudythms
    $.fn.tagManage = function(method, tags) {
        return this.each(function() {
            var m = method.toUpperCase().replace(/\s+/g, '');
            var tag = $(this);

            if (m === "WHITELIST") {
                tag.hide();
            }

            $.each(tags, function(index, value) {
                var value = 't-' + value.replace(/\*/g, '%2A')
                    .replace(/\!/g, '%21')
                    .replace(/\?/g, '%3F')
                    .replace(/\(/g, '%28')
                    .replace(/\)/g, '%29')
                    .replace(/\;/g, '%3B')
                    .replace(/\+/g, '%2B')
                    .replace(/\&/g, '%26')
                    .replace(/\"/g, '%22')
                    .replace(/\'/g, '%27')
					.replace(/\:/g, '%3A')
                    .replace(/\s/g, '+');
                if (tag.hasClass(value)) {
                    if (m === "WHITELIST") {
                        tag.show();
                    } else if (m === "BLACKLIST") {
                        tag.hide();
                    }

                }

            });

        });
    };

}(jQuery));
