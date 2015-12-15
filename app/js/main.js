(function() {

	'use strict';

   console.log('Start project');

   var myTitle = 'Hello World!';

   function title(texto){

      document.querySelector('.title').textContent = texto;

   }

   title(myTitle);


})();
