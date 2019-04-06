function formatTime (secs) {
	var hrs = (secs/3600).toFixed(0);
	var mins = ((secs%3600)/60).toFixed(0);
	var seconds = (secs%3600)%60;
	
	//wyswietlanie tylko jesli wieksze od zera
	if(hrs > 0) { 
		hrs = hrs + 'godz. '
	}
	else { hrs = '';}

	if(mins > 0) { 
		mins = mins + 'min. '
	}
	else { mins = '';}

	if(seconds > 0) { 
		seconds = seconds + 'sek. '
	}
	else { seconds = '';}

	console.log('Uptime: ' + hrs + mins + seconds);
}

exports.format = formatTime;