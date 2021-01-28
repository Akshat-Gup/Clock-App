const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const digitalClock = document.querySelector(".digitalClock");
let now, hh, mm, ss;

setInterval(()=>{
	//Analog Clock Code
	now = new Date();
	hh = now.getHours();
	if (hh>12) {
		hh-=12
	}
	hh*=30 // 12 hours*30 deg = 360deg
	mm = now.getMinutes() * 6; // Same concept: 60 m * 6 deg/m = 360 deg
	ss = now.getSeconds() * 6; // Same concept: 60 m * 6 deg/m = 360 deg

	hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`; //The mm/12 extends the range of the hour bar by upto 30 deg (distance between 2 bars)
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
	//Digital Clock Code
	const html = `
	<p>${hh/30}:${mm/6}:${ss/6}</p>
	`;
	digitalClock.innerHTML = html;
},1000);