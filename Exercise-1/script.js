function DateTime(){
	greetings();
	getTime();
	getDate();
}

function greetings(){
	var today=new Date();
	var hr=today.getHours();
	if (hr>4 && hr<13) {
		message="Good Morning";
	}
	else if (hr>13 && hr<18 ) {
			message="Good Afternoon";
	}
	else if (hr>18 && hr<23 ) {
			message="Good Evening";
	}
	else{
		message="Good night";
	}
	document.getElementById("message").innerHTML=message;
	updateGreetings("message",3600000);
}

function getTime(){
	var today=new Date();
	var hr=today.getHours();
	var min=today.getMinutes();
	var sec=today.getSeconds();
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

function checkTime(i) {
	if(i<10){
		i="0"+i;
	}
	return i;
}


function getDate(){	
	var today=new Date();
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    updateDate("date",3600000)
}

function updateGreetings(id,timeInterval){
	setInterval(greetings,timeInterval);
}

function updateTime(id,timeInterval){
	setInterval(getTime,timeInterval);
}
function updateDate(id,timeInterval){
	setInterval(getDate,timeInterval);
}



	    