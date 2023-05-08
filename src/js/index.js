"use strict"
import "../css/style.css";
import "../css/promo.css";
import "../css/form.css";

import "../css/slider.css";
import "../css/advantages.css";
import "../css/howItWorks.css";
import "../css/flights.css";
import "../css/footer.css";
import Swiper from "swiper";
import "swiper/css";
let swiper;
const slides_points = document.querySelectorAll(".slider_points_item");
const slides_text = document.querySelectorAll(".slider_text_item");
window.addEventListener("load", () => {
	swiper = new Swiper(".mySwiper", {
		initialSlide: 0,
		slidesPerView: 1,
		spaceBetween: 0,
	});
	swiper.on("slideChange", () => {
		setActiveSlideText();
		setActivePagination();
	});
	setActiveSlideText();
	setActivePagination();
	getOffset();
});

document.querySelector(".swiper-button-next").addEventListener(`click`, () => {
	swiper.slideNext();
});

document.querySelector(".swiper-button-prev").addEventListener(`click`, () => {
	swiper.slidePrev();
});

window.addEventListener(
	`resize`,
	() => {
		getOffset();
	},
	false
);

function getOffset() {
	const form_position = document.querySelector(".form_free_quote").getBoundingClientRect().bottom;
	const promo_position = document.querySelector(".promo").getBoundingClientRect().bottom;
	document.querySelector(".info_block").style.top = (form_position-promo_position+35) + "px";
	document.querySelector(".footer").style.marginTop=(form_position-promo_position+35) +240 + "px";
}

//Pagination slides settings

slides_points.forEach((slide) => {
	slide.addEventListener("click", async (e) => {
		const slideTo = e.target.getAttribute("data-slide-to");
		swiper.slideTo(slideTo - 1);
	});
});

function setActiveSlideText() {
	slides_text.forEach((slide) => (slide.style.display = "none"));
	slides_text[swiper.activeIndex].style.display = "block";
}
function setActivePagination() {
	slides_points.forEach((slide) => (slide.style.background = "#006dd233"));
	slides_points[swiper.activeIndex].style.background = "#006dd2";
}
