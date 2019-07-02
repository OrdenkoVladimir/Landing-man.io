function myTimer() {
	var	i = 18,
	var idInt = setInterval(function() {
		document.querySelector('#package').innerHTML = i;
		if (i == 1) {
			clearInterval(idInt);
		}
		i = i - 1;
	}, 1000);

};

myTimer();