(function(){
   if (typeof jQuery=='undefined') { 
      script = document.createElement( 'script' );
      script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
      script.onload=buildTable;
      document.body.appendChild(script);
   }
   else {
      buildTable();
   }

   function buildTable(){
      var tbody = ''; 
      jQuery('ul[id^="ref_"] > li> a')
      .not('a[href*=publication_date], li.shoppingEngineExpand > a')
      .each(function(){
         l = jQuery(this); 
         tbody += '<tr><td>' + l.text() + '</td><td>' + 'http://www.amazon.com' + l.attr('href') + '</td></tr>\n';
      });

      var table = '<table>\n<thead><tr><th>Category</th><th>Url</th></tr></thead><tbody>' 
         + tbody + '</tbody></table>';

      jQuery('body').replaceWith(table);
   }
})();
