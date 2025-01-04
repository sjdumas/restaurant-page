import "./style.css";
import { loadHome } from "./content.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import { loadContact } from "./contact.js";

function clearContent() {
	const content = document.getElementById("content");
	if (content) {
		while (content.firstChild) {
			content.removeChild(content.firstChild);
		}
	}
}

function addNavListeners() {
	const navButtons = {
		home: loadHome,
		menu: loadMenu,
		about: loadAbout,
		contact: loadContact,
	};

	Object.entries(navButtons).forEach(([id, loadFunction]) => {
		const button = document.getElementById(id);
		if (button) {
			button.addEventListener("click", () => {
				clearContent();
				loadFunction();
			});
		} else {
			console.error(`Button with id "${id}" not found`);
		}
	});
}

function initializeWebsite() {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", () => {
			loadHome();
			addNavListeners();

			// Add logo click handler
			const logo = document.querySelector(".logo a");
			if (logo) {
				logo.href = "#";
				logo.addEventListener("click", (e) => {
					e.preventDefault();
					clearContent();
					loadHome();
				});
			}

			// Add hamburger menu functionality
			const hamburger = document.querySelector(".hamburger");
			const navMenu = document.querySelector(".nav-menu");

			hamburger.addEventListener("click", () => {
				hamburger.classList.toggle("active");
				navMenu.classList.toggle("active");
			});

			document.querySelectorAll(".nav-menu button").forEach((button) => {
				button.addEventListener("click", () => {
					hamburger.classList.remove("active");
					navMenu.classList.remove("active");
				});
			});
		});
	} else {
		loadHome();
		addNavListeners();

		// Add logo click handler
		const logo = document.querySelector(".logo a");
		if (logo) {
			logo.href = "#";
			logo.addEventListener("click", (e) => {
				e.preventDefault();
				clearContent();
				loadHome();
			});
		}

		// Add hamburger menu functionality
		const hamburger = document.querySelector(".hamburger");
		const navMenu = document.querySelector(".nav-menu");

		hamburger.addEventListener("click", () => {
			hamburger.classList.toggle("active");
			navMenu.classList.toggle("active");
		});

		document.querySelectorAll(".nav-menu button").forEach((button) => {
			button.addEventListener("click", () => {
				hamburger.classList.remove("active");
				navMenu.classList.remove("active");
			});
		});
	}
}

initializeWebsite();
