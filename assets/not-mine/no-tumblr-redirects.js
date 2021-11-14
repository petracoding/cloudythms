// https://magnusthemes.tumblr.com/post/162657076440/remove-tumblrs-redirects

function noTumblr(){
  var linkSet = document.querySelectorAll('a[href*="t.umblr.com/redirect"]');
  Array.prototype.forEach.call(linkSet, function(el, i){
      var currentLink = linkSet[i];
      var originalURL = currentLink.getAttribute("href").split("?z=")[1].split("&t=")[0];
      var replaceURL = decodeURIComponent(originalURL);
      currentLink.setAttribute("href",replaceURL);
 });
}
noTumblr();