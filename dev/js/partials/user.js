'use strict';

window.onload = function() {
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

	let excavatorSlideIndex = 0;
	let bulldozerSlideIndex = 3;
	let excavatorTrigger = document.querySelector('.excavatorTrigger');
	let bulldozerTrigger = document.querySelector('.bulldozerTrigger');
	excavatorTrigger.addEventListener('click', function (e) {
		e.preventDefault();
		equipmentSlider.slideTo(excavatorSlideIndex, 500);
		bulldozerTrigger.classList.remove('equipment__trigger_active');
		this.classList.add('equipment__trigger_active');
	});
	bulldozerTrigger.addEventListener('click', function (e) {
		e.preventDefault();
		equipmentSlider.slideTo(bulldozerSlideIndex, 500);
		excavatorTrigger.classList.remove('equipment__trigger_active');
		this.classList.add('equipment__trigger_active');
	});

	let equipmentSlider = new Swiper('.equipment__slider', {
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
					nextEl: '.equipment__slider-next',
					prevEl: '.equipment__slider-prev',
				},
			}
		}
	});

	equipmentSlider.on('slideChange', function () {
		if(this.activeIndex < bulldozerSlideIndex) {
			excavatorTrigger.classList.add('equipment__trigger_active');
			bulldozerTrigger.classList.remove('equipment__trigger_active');
		}
		if(this.activeIndex === bulldozerSlideIndex) {
			excavatorTrigger.classList.remove('equipment__trigger_active');
			bulldozerTrigger.classList.add('equipment__trigger_active');
		}
	});

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
				spaceBetween: 152,
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
