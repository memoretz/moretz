function checkTestStyleBlock(){
	var docStyles = document.getElementsByClassName('teststyles');
	if (!(docStyles.length > 0)){
		var docStyles = document.createElement('style');
		docStyles.className = 'teststyles';
		document.head.appendChild(docStyles);
		console.log('ye');
	}
	else{
		console.log('fe');
	}

}

checkTestStyleBlock();
checkTestStyleBlock();