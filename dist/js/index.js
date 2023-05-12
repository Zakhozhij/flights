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
	const promo_position = document.querySelector(".promo").getBoundingClientRect().bottom;
	document.querySelector(".info_block").style.top = form_position - promo_position + 35 + "px";
	document.querySelector("footer").style.marginTop = form_position - promo_position + 35 + 240 + "px";
	// document.querySelector(".elipse").style.top = flyer_club_position.top-10 + "px";
	// document.querySelector(".elipse").style.right = flyer_club_position.left + 130 + "px";
}



document.querySelector('.modal_feedback_close').addEventListener("click", function (e) {
    location.reload();
});