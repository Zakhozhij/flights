"use strict";
window.addEventListener("DOMContentLoaded", () => {
	getOffset();
});

//Footer margin from top
window.addEventListener(
	`resize`,
	() => {
		getOffset();
	},
	false
);

function getOffset() {
	const form_position = document.querySelector(".company-partners").getBoundingClientRect().bottom;
	const promo_position = document.querySelector(".promo").getBoundingClientRect();
	document.querySelector(".info_block").style.marginTop = form_position - promo_position.bottom + 35 + "px";
	document.querySelector("footer").style.marginTop = form_position - promo_position.bottom + 35 + 200 + "px";
}



document.querySelector('.modal_feedback_close').addEventListener("click", function (e) {
    location.reload();
});