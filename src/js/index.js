import "../css/style.css";
import "../css/promo.css";
import "../css/form.css";

import "../css/slider.css";
import "../css/advantages.css";
import "../css/howItWorks.css";
import "../css/flights.css";
import "../css/footer.css";
window.addEventListener("load", () => {
    slider({
		container: ".slider_slides_block",
		slide: ".offer__slide",
		nexArrow: ".slider_slides_next_arrow",
		prevArrow: ".slider_slides_prev_arrow",
		wrapper: ".offer__slider-wrapper",
		field: ".offer_slider-inner",
	});
	getOffset();
	
});

window.addEventListener(
	`resize`,
	() => {
		document.querySelector(".footer").style.display = "none";
		getOffset();
	},
	false
);

function getOffset() {
	const rect = document.querySelector(".choose_flight").getBoundingClientRect().top + 100 + window.pageYOffset;
	document.querySelector("main").style.height = rect + "px";
	document.querySelector(".footer").style.display = "block";
}

function slider({ container, slide, nexArrow, prevArrow, wrapper, field }) {
	const prev = document.querySelector(prevArrow),
		next = document.querySelector(nexArrow),
		slides = document.querySelectorAll(slide),
		slidesWrapper = document.querySelector(wrapper),
		slidesField = document.querySelector(field),
		width = window.getComputedStyle(slidesWrapper).width,
		slider = document.querySelector(container);

	let slideIndex = 1;
	let offset = 0;

	slidesField.style.width = 100 * slides.length + "%";
	slidesField.style.display = "flex";
	slidesField.style.transition = "0.5s all";
	slidesWrapper.style.overflow = "hidden";
	slides.forEach((slide) => {
		slide.style.width = width;
	});

	slider.style.position = "relative";

	let dots = document.querySelectorAll(".slider_points_item");

	next.addEventListener("click", () => {
		if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +width.slice(0, width.length - 2);
		}
		slidesField.style.transform = `translateX(-${offset}px)`;
		showSlides(++slideIndex);
	});

	prev.addEventListener("click", () => {
		if (offset == 0) {
			offset = +width.slice(0, width.length - 2) * (slides.length - 1);
		} else {
			offset -= +width.slice(0, width.length - 2);
		}
		slidesField.style.transform = `translateX(-${offset}px)`;
		showSlides(--slideIndex);
	});

	showSlides(slideIndex);

	function showSlides(i) {
		if (i > slides.length) {
			slideIndex = 1;
		}

		if (i < 1) {
			slideIndex = slides.length;
		}

		dots.forEach((dot) => (dot.style.background = "#006dd233"));
		dots[slideIndex - 1].style.background = "#006dd2";
	}

	dots.forEach((dot) => {
		dot.addEventListener("click", (e) => {
			const slideTo = e.target.getAttribute("data-slide-to");
			slideIndex = slideTo;

			offset = +width.slice(0, width.length - 2) * (slideTo - 1);
			slidesField.style.transform = `translateX(-${offset}px)`;
			showSlides(slideIndex);
		});
	});
}
