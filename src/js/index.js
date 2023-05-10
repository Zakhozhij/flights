"use strict";
import "../css/style.css";
import "../css/promo.css";
import "../css/form.css";

import "../css/slider.css";
import "../css/advantages.css";
import "../css/howItWorks.css";
import "../css/flights.css";
import "../css/reviews.css";
import "../css/footer.css";
import "../css/elipse.css";
import Swiper from "swiper";
import "swiper/css";

const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
};

const fadeOut = (el, timeout) => {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = "none";
	}, timeout);
};

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

	const menu = document.querySelector(".menu_list"),
		menuItem = document.querySelectorAll(".menu_list_item"),
		hamburger = document.querySelector(".hamburger"),
		menu_close = document.querySelector(".menu_close");

	hamburger.addEventListener("click", () => {
		menu.classList.add("menu_list_active");
	});
	menu_close.addEventListener("click", () => {
		menu.classList.remove("menu_list_active");
	});
	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			menu.classList.toggle("menu_list_active");
		});
	});

	let h_hght = document.querySelector("header").offsetHeight; // высота шапки
	let h_mrg = 0; // отступ когда шапка уже не видна
	window.addEventListener("scroll", () => {
		
		let top = window.pageYOffset;
		const elem = document.querySelector("header");
		const nav = document.querySelector(".menu_block");
		if (top + h_mrg < h_hght) {
			elem.style.top=(35 - top) + "px" ;
			nav.style.cssText="background:#00000000;";
		} else {
			elem.style.top="10px";
			nav.style.cssText="background:linear-gradient(0deg, #2e6bcb, #2e6bcb), #ffffff;";
		}
	});

	let preloader = document.querySelector("#preloader"),
		loader = document.querySelector("#preloader #loader");
	fadeOut(loader, 0);
	fadeOut(preloader, 200);
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
	document.querySelector(".info_block").style.top = form_position - promo_position + 35 + "px";
	document.querySelector(".footer").style.marginTop = form_position - promo_position + 35 + 240 + "px";
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
//preloader
