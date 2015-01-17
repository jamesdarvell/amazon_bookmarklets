
(function(){

   var parentCategory = jQuery('li:nth-child(2) > strong:nth-child(1)').text();

   loadJQuery(function(){
      loadYaml(outputYaml);
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
   
   function outputYaml(){
        jQuery('body').append('<pre>#YAML#</pre>'.replace('#YAML#', yaml.dump(getData())));  
   }

    function getData(){
     links = []

     jQuery('ul[id^="ref_"] > li> a')
      .not('a[href*=publication_date], li.shoppingEngineExpand > a')
      .each(function(){
         var l = jQuery(this);
         links.push({
            category: parentCategory + ' - ' + l.text().replace(/\(.*\)/g, '').trim(), 
            url: 'http://www.amazon.com' + l.attr('href')
         }); 
      });
      
     return links;
    }
   
})();
