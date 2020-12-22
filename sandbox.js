const clock = document.querySelector(".clock");
const updateTime = () => {
	const now = new Date;
	const h = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();
	const html = `
	<p>${h}:${min}:${sec}</p>
	`;
	clock.innerHTML = html;
};

setInterval(updateTime, 1000);