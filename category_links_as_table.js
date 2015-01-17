(function(){
var links = ''; 
jQuery('ul[id^="ref_"] > li> a').not('a[href*=publication_date], li.shoppingEngineExpand > a').each(function(){
  l = jQuery(this); 
  links += '<tr><td>' + l.text() + '</td><td>' + l.attr('href') + '</td></tr>\n';
});

var table = '<table>\n<thead><tr><th>Category</th><th>Url</th></tr></thead>' + links + '</table>';

jQuery('body').replaceWith(table);
})();
