(function(){

   loadJQuery(function(){
      loadYaml(buildTable);
   });

   function loadJQuery(callback){
      if (typeof jQuery=='undefined') { 
         importScript('http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js', callback);
      }
      else {
         callback();
      }
   
   }

   function loadYaml(callback){
      importScript('https://raw.githubusercontent.com/connec/yaml-js/master/yaml.min.js', callback);
   }

   function importScript(url, callback){
      var script       = document.createElement( 'script' );
      script.src       = url;
      script.onload    = callback;

      document.body.appendChild(script);
   }

   function buildTable(){
      var tbody = ''; 
      jQuery('ul[id^="ref_"] > li> a')
      .not('a[href*=publication_date], li.shoppingEngineExpand > a')
      .each(function(){
         var l = jQuery(this); 
         tbody += '<tr><td>' + l.text() + '</td><td>' + 'http://www.amazon.com' + l.attr('href') + '</td></tr>\n';
      });

      var table = '<table>\n<thead><tr><th>Category</th><th>Url</th></tr></thead><tbody>' 
         + tbody + '</tbody></table>';

      jQuery('body').replaceWith(table);
   }
})();
