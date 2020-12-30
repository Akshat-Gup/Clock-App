const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const digitalClock = document.querySelector(".digitalClock");
let now, hh, mm, ss;
const updateTime = () => {
	const now = new Date;
	const h = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();
	const html = `
	<p>${h}:${min}:${sec}</p>
	`;
	digitalClock.innerHTML = html;
};

setInterval(()=>{
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

},1000)



setInterval(updateTime, 1000);