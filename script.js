const start = document.querySelector('.start');
const end = document.querySelector('.stop');
const reset = document.querySelector('.reset');

const h = document.querySelector('.hr');
const m = document.querySelector('.min');
const s = document.querySelector('.sec');
const mis = document.querySelector('.ms');

end.classList.add('disable');
reset.classList.add('disable');

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let timer;

start.addEventListener('click', () => {
	start.classList.add('disable');
	end.classList.remove('disable');
	reset.classList.remove('disable');
	timer = setInterval(() => {
		ms++;
		if (ms == 100) {
			sec++;
			ms = 0;
		}
		if (sec == 60) {
			min++;
			sec = 0;
		}
		if (min == 60) {
			hr++;
			min = 0;
		}
		update();
	}, 10);
});
end.addEventListener('click', () => {
	start.classList.remove('disable');
	end.classList.add('disable');
	clearInterval(timer);
});
reset.addEventListener('click', () => {
	start.classList.remove('disable');
	end.classList.add('disable');
	reset.classList.add('disable');
	hr = 0;
	min = 0;
	sec = 0;
	ms = 0;
	clearInterval(timer);
	update();
});

function update() {
	nhr = hr < 10 ? '0' + hr : hr;
	nmin = min < 10 ? '0' + min : min;
	nsec = sec < 10 ? '0' + sec : sec;
	nms = ms < 10 ? '0' + ms : ms;

	h.innerText = nhr;
	m.innerText = nmin;
	s.innerText = nsec;
	mis.innerText = nms;
}
