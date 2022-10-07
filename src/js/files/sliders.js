/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.works__swiper')) {
		new Swiper('.works__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],

			effect: 'fade',

			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			lazy: true,
			// Dotts
			// Arrows
			navigation: {
				nextEl: '.works__slider-arrows .arrow-next',
				prevEl: '.works__slider-arrows .arrow-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				450: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				991: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1100: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},
			on: {

			}
		});
	}

	if (document.querySelector('.sertificat__swiper')) {
		new Swiper('.sertificat__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			// Arrows
			navigation: {
				nextEl: '.sertificat__slider-arrows .arrow-next',
				prevEl: '.sertificat__slider-arrows .arrow-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				450: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				668: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 15,
					slidesPerGroup: 1,
				},
				1068: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
		});
	}

	if (document.querySelector('.reviews__swiper')) {
		new Swiper('.reviews__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],

			effect: 'fade',

			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			lazy: true,
			// Dotts
			// Arrows
			navigation: {
				nextEl: '.reviews__slider-arrows .arrow-next',
				prevEl: '.reviews__slider-arrows .arrow-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: false,
				},
				500: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1100: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
			on: {

			}
		});
	}

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});