(function(){

	var inputsDirection = Array.prototype.slice.call(document.querySelectorAll('.demo5 input[type=radio]'));
	
	var flexContDirection = document.querySelector('.demo5 .flexbox1')
	

	inputsDirection.forEach(
		function(elem){
			elem.addEventListener('change', function(ev){
				var text = elem.value;
			
				flexContDirection.style.flexDirection = text;
			}, false)
		});

		var inputsWrap = Array.prototype.slice.call(document.querySelectorAll('.demo11 input[type=radio]'));
	
	var flexContWrap = document.querySelector('.demo11 .flexbox1')
	

	inputsWrap.forEach(
		function(elem){
			elem.addEventListener('change', function(ev){
				var text = elem.value;
			
				flexContWrap.style.flexWrap = text;
			}, false)
		});

	var inputsFlex = Array.prototype.slice.call(document.querySelectorAll('.demo18 input[type=radio]'));
	
	var divsFlex = Array.prototype.slice.call(document.querySelectorAll('.demo18 .flexbox3 div'));
	

	inputsFlex.forEach(
		function(elem){
			elem.addEventListener('change', function(ev){
				var text = elem.value;
				
				divsFlex.forEach(
					function(elem){
						elem.style.flex = text;
					});
			}, false)
		});
})();