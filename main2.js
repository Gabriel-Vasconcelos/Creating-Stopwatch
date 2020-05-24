"use strict"

var hh = 0,
	mm = 0,
	ss = 0,
	mms = 0;

const time = 0.8; // 1 thousandth
var cron;

var mmsDez = '';


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
	mms = 0;

	document.querySelector('#counter').innerText = '00: 00: 00: 0000';

}

function timer(){
	mms++;

	if(mms == 1000){
		mms = 0;
		ss++;

		if(ss == 60){
			ss = 0;
			mm++;

			if(mm == 60){
				mm = 0;
				hh++;
			}
		}
	}


	if(mms >= 1 && mms < 10 ){
		mmsDez = '000';
	}
	else if(mms >= 10 && mms < 100){
		mmsDez = '00';
	}
	else if(mms >= 100 && mms < 1000){
		mmsDez = '0';
	}

	let format = `${ (hh < 10 ? '0' + hh : hh ) }: ${ (mm < 10 ? '0' + mm : mm) }: ${ (ss < 10 ? '0' + ss : ss) }: ${ mmsDez + mms }`;
	document.querySelector('#counter').innerText = format;
}