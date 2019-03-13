function DateTime(){
	greetings();
	getTime();
	getDate();
}

function greetings(){                    //Function for showing greetings Gm,Ge,Gn
	var today=new Date();
	var hr=today.getHours();
	if (hr>=0 && hr<6) {
		message="Good Night";
	}
	else if (hr>=6 && hr<12 ) {
			message="Good Morning";
	}
	else if (hr>=12 && hr<18 ) {
			message="Good AfterNoon";
	}
	else {
		message="Good Evening";
	}
	document.getElementById("message").innerHTML=message;
}

function getTime(){                     //function to Get time
	var today=new Date();
	var hr=today.getHours();
	var min=today.getMinutes();
	var sec=today.getSeconds();
	if (hr==0 && min==0 && sec==0) {
		getDate();
	}

	if(hr%6==0 && min==0 && sec==0){
		greetings();
	}
	var ap="AM";
	if(hr==0){
		hr=12;
	}
	else if (hr>12) {
		hr=hr-12;
		ap="PM";
	}
	hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
   	time=hr + ":" + min + ":" + sec + " " + ap;
   	console.log(time);
	document.getElementById("clock").innerHTML = time;
	updateTime("clock",1000);
}

function checkTime(i) {                         //function to check time and add prefix "0" if single digit
	if(i<10){
		i="0"+i;
	}
	return i;
}


function getDate(){								//function to get current Date
	var today=new Date();
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    return;
    
}

function updateTime(id,timeInterval){
	setTimeout(getTime,timeInterval);
}




	    