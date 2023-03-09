var sidebarOpened;

function openSidebar() {
	const sideBar = document.getElementById('sidebar');
	sideBar.style.width = '250px';
	sideBar.style.left = '0px';
	const over = document.getElementById('overlay');
	over.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	//const main = document.getElementById('main');
	//main.style.marginLeft = '250px';
}

function closeSidebar() {
	const sideBar = document.getElementById('sidebar');
	const overlay = document.getElementById('overlay');

	sideBar.style.width = '0px';
	sideBar.style.left = '-250px';
	overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
	//const main = document.getElementById('main');
	//main.style.marginLeft = '0px';
}
var previousElement;

function unclick() {
	if (previousElement != undefined) {
		previousElement.style.backgroundColor = '#30303f';
	}
}

function clickButton(buttonId) {
	unclick();
	const button = document.getElementById(buttonId);
	button.style.backgroundColor = '#007fff';
	previousElement = document.getElementById(buttonId);
}

function toggleSidebar() {
	if (sidebarOpened == undefined) {
		sidebarOpened = 0;
	}
	switch (sidebarOpened) {
		case 1:
			closeSidebar();
			sidebarOpened = 0;
			console.log('closing');
			break;
		case 0:
			openSidebar();
			sidebarOpened = 1;
			console.log('opening');
	}
}
