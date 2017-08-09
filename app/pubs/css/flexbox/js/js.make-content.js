(function(){
	var secs = Array.prototype.slice.call(document.querySelectorAll('.mod-pub h3'));
	var content = document.querySelector('.mod-sidebar ul');
	secs.forEach(
			function(e, index){
				var text = e.textContent;
				e.id = "h3-" + index;
				
				var a = document.createElement('a');
				a.href = "#" + e.id;
				a.textContent = text;
				var li = document.createElement('li');
				li.appendChild(a);;
				content.appendChild(li);

			}
		);

})();