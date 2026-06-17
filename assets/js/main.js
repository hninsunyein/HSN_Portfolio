// Preloader
const preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
	setTimeout(() => {
		preloader.classList.add("hidden");
	}, 1000);
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
	document.documentElement.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
	if (themeToggle) {
		themeToggle.querySelector("i").className =
			theme === "light"
				? "fa-solid fa-moon fa-fw"
				: "fa-solid fa-sun fa-fw";
	}
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

if (themeToggle) {
	themeToggle.addEventListener("click", () => {
		const current = document.documentElement.getAttribute("data-theme");
		applyTheme(current === "light" ? "dark" : "light");
	});
}

// Activate links on scroll
const mainContainer = document.querySelector("main");
const sections = document.querySelectorAll("section[id]");

if (mainContainer) {
	mainContainer.addEventListener("scroll", () => {
		const scrollTop = mainContainer.scrollTop;
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.id;
			scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight
				? document.querySelector(`.navbar__link[href*=${sectionId}]`)?.classList.add("active")
				: document.querySelector(`.navbar__link[href*=${sectionId}]`)?.classList.remove("active");
		});
	});
}

document.addEventListener("scroll", () => {
	const scrollTop = window.scrollY;
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.id;
		scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight
			? document.querySelector(`.navbar__link[href*=${sectionId}]`)?.classList.add("active")
			: document.querySelector(`.navbar__link[href*=${sectionId}]`)?.classList.remove("active");
	});
});
