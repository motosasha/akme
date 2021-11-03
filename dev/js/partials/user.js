'use strict';

window.onload = function() {
	let scrollBarWidth = window.innerWidth - document.body.clientWidth;
	console.log(scrollBarWidth);
	document.documentElement.style.setProperty('--scrollbar-width', scrollBarWidth + 'px');

	let header = document.querySelector('.header');
	let className = 'header_on_scroll';
	let scrollTrigger = 240;

	window.onscroll = function() {
		if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
			header.classList.add(className);
		} else {
			header.classList.remove(className);
		}
	};

	let inputs = document.querySelectorAll('input');
	for (let input of inputs) {
		input.addEventListener('input', function() {
			if(this.value.length !== 0) {
				this.classList.add('input_has-value');
			}
			else {
				this.classList.remove('input_has-value');
			}
		})
	}

	let phoneFields = document.querySelectorAll('input[type=tel]');
	for (let field of phoneFields) {
		let phoneMask = IMask(field, {
			mask: '+{7} (000) 000-00-00',
		});
	}

	let equipmentSlider = new Swiper('.equipment__slider_excavator', {
		slidesPerView: 'auto',
		spaceBetween: 24,
		breakpoints: {
			576: {
				slidesPerView: 'auto',
				spaceBetween: 76,
			},
			1280: {
				slidesPerView: 'auto',
				spaceBetween: 76,
				navigation: {
					nextEl: '.equipment__slider-next_excavator',
					prevEl: '.equipment__slider-prev_excavator',
				},
			}
		}
	});
	let equipmentSlider2 = new Swiper('.equipment__slider_bulldozer', {
		slidesPerView: 'auto',
		spaceBetween: 24,
		breakpoints: {
			576: {
				slidesPerView: 'auto',
				spaceBetween: 76,
			},
			1280: {
				slidesPerView: 'auto',
				spaceBetween: 76,
				navigation: {
					nextEl: '.equipment__slider-next_bulldozer',
					prevEl: '.equipment__slider-prev_bulldozer',
				},
			}
		}
	});

	function Tabs() {
		let bindAll = function() {
			let menuElements = document.querySelectorAll('[data-tab]');
			for(let i = 0; i < menuElements.length ; i++) {
				menuElements[i].addEventListener('click', change, false);
			}
		};
		let clear = function() {
			let menuElements = document.querySelectorAll('[data-tab]');
			for(let i = 0; i < menuElements.length ; i++) {
				menuElements[i].classList.remove('equipment__trigger_active');
				let target = menuElements[i].getAttribute('data-tab');
				document.querySelector(`[data-target='${target}']`).classList.remove('equipment__tab_active');
			}
		};
		let change = function(e) {
			clear();
			e.target.classList.add('equipment__trigger_active');
			let target = e.currentTarget.getAttribute('data-tab');
			document.querySelector(`[data-target='${target}']`).classList.add('equipment__tab_active');
		};
		bindAll();
	}
	let connectTabs = new Tabs();

	let equipmentCardSlider = new Swiper('.equipment__card-slider', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	let teamSlider = new Swiper('.team__slider', {
		slidesPerView: 'auto',
		spaceBetween: 24,
		breakpoints: {
			576: {
				slidesPerView: 'auto',
				spaceBetween: 76,
			},
			1280: {
				slidesPerView: 'auto',
				spaceBetween: 76,
				navigation: {
					nextEl: '.team__slider-next',
					prevEl: '.team__slider-prev',
				},
			}
		}
	});

	let objectsBack = new Swiper('.objects__sliderBack', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	let objectsFront = new Swiper('.objects__sliderFront', {
		slidesPerView: 1,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		}
	});
	objectsBack.controller.control = objectsFront;
	objectsFront.controller.control = objectsBack;

	let modals = new HystModal({
		linkAttributeName: "data-hystmodal",
	});
	thanks = function () {
		modals.open('#thanks')
	};

	let scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500
	});
};
