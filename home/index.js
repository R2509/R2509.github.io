var opened;

function open() {
	const sb = document.getElementById('sidebar');
	sb.style.width = '250px';
	sb.style.left = '0px';
	const over = document.getElementById('overlay');
	over.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	//const main = document.getElementById('main');
	//main.style.marginLeft = '250px';
}

function close() {
	const sb = document.getElementById('sidebar');
	sb.style.width = '0px';
	sb.style.left = '-250px';
	const over = document.getElementById('overlay');
	over.style.backgroundColor = 'rgba(0, 0, 0, 0)';
	//const main = document.getElementById('main');
	//main.style.marginLeft = '0px';
}
var prevEl;

function unclick() {
	if (prevEl != undefined) {
		prevEl.style.backgroundColor = '#30303f';
	}
}

function clickB(id) {
	unclick();
	const button = document.getElementById(id);
	button.style.backgroundColor = '#007fff';
	prevEl = document.getElementById(id);
}

function toggleSidebar() {
	if (opened == undefined) {
		opened = 0;
	}
	switch (opened) {
		case 1:
			close();
			opened = 0;
			console.log('closing');
			break;
		case 0:
			open();
			opened = 1;
			console.log('opening');
	}
}
