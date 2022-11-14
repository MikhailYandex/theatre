// Слайдер
let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.header-bottom__button-next').addEventListener('click', function() {
	offset = offset + 180; // offset += 180;
	if (offset > 540) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
});

document.querySelector('.header-bottom__button-prev').addEventListener('click', function() {
	offset = offset - 180; // offset -= 180;
	if (offset < 0) {
		offset = 540;
	}
	sliderLine.style.left = -offset + 'px';
});

// Меню бургер
const btn = document.querySelector('.header__icon');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
	btn.classList.toggle('active');
	body.classList.toggle('lock');
});

// JQuery 
/*$(document).ready(function() {
	$('.header__icon').click(function(event) {
		$('.header__icon,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});*/
