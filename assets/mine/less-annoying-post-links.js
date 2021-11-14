const linkEls = document.querySelectorAll('[href*="/post/"]');
[...linkEls].forEach(linkEl => {
    let url = linkEl.getAttribute('href');
    var pos1 = url.search(/\/post\/\d+\//i);
    if (pos1 != -1){
        var ugly = url.substring(pos1 + 6);
        var pos2 = ugly.search(/\//);
        ugly = ugly.substring(pos2 + 1);
        url = url.replace(ugly, '');
        linkEl.setAttribute('href', url);
    }
});
