"use strict"

var hh = 0,
	mm = 0,
	ss = 0;

const time = 1000; // 1 Second
var cron;

function start(){

	cron = setInterval(timer, time); // Call function in interval of 'time'
}

function pause(){
	clearInterval(cron); //Stopping the interval 'cron'
}

function stop(){
	clearInterval(cron);
	
	hh = 0;
	mm = 0;
	ss = 0;

	document.querySelector('#counter').innerText = '00: 00: 00';

}

function timer(){
	ss++;

	if( ss == 60){
		ss = 0;
		mm++;

		if(mm == 60){
			mm = 0;
			hh++;
		}
	}

	let format = `${ (hh < 10 ? '0' + hh : hh ) }: ${ (mm < 10 ? '0' + mm : mm) }: ${ (ss < 10 ? '0' + ss : ss) }`;
	document.querySelector('#counter').innerText = format;
}