"use strict";
import "../css/style.css";
import "../css/promo.css";
import "../css/form.css";
import "../css/slider.css";
import "../css/advantages.css";
import "../css/howItWorks.css";
import "../css/flights.css";
import "../css/reviews.css";
import "../css/formsection.css";
import "../css/partners.css";
import "../css/footer.css";
import "../css/elipse.css";
import "../css/modal_booking.css";
import "./phoneNumber.js";
import "./validation.js"
import "./modal.js"
import "./sliders.js"
import "./menu.js"

window.addEventListener("DOMContentLoaded", () => {
	getOffset();
	//hide preloader
	let preloader = document.querySelector("#preloader"),
		loader = document.querySelector("#preloader #loader");
	fadeOut(loader, 0);
	fadeOut(preloader, 300);

	document.querySelectorAll(".modal").forEach((item) => {
		item.style.transition = `0.3s all`;
	});
	document.querySelector(".overlay").style.transition = `0.3s all`;
});

//preloader
function fadeIn(el, timeout, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
}

function fadeOut(el, timeout) {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = "none";
	}, timeout);
}
//Footer margin from top
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



