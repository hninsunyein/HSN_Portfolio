const Projects = [
	{
		title: "NXOps Energy Monitoring Dashboard",
		image: "p1.png",
		tags: ["React.js", "Ant Design", "API"],
		platform: "web",
		href: "https://evercomm.io/nxops/",
	},
	{
		title: "Smart Mom",
		image: "p2.png",
		tags: ["Next.js", "Tailwind", "Nest.js", "Docker", "MySQL"],
		platform: "web",
		href: "https://smartmom-rust.vercel.app/",
	},
	{
		title: "Smart Mom",
		image: "p2.png",
		tags: ["React Native"],
		platform: "mobile",
		href: "https://github.com/hninsunyein/SmartMom/releases/download/v1.0.0/smart-mom.apk",
	},
	{
		title: "Study Tracker",
		image: "p3.jpg",
		tags: ["Claude Code"],
		platform: "web",
		href: "https://study-tracker-rosy.vercel.app/",
	},
	{
		title: "S2Exchange",
		image: "p5.jpg",
		tags: ["Flutter", "Python", "Django Flask"],
		platform: "web",
		href: "https://s2-exchange-backend-production.up.railway.app/",
	},
	{
		title: "S2Exchange",
		image: "p5.jpg",
		tags: ["Flutter", "Python", "Django Flask"],
		platform: "mobile",
		href: "https://github.com/hninsunyein/s2-exchange-backend/releases/download/v1.0.0/s2Xchange.apk",
	},
	{
		title: "S2 Tech Training Center",
		image: "p4.png",
		tags: ["Next.js", "Tailwind CSS", "TypeScript"],
		platform: "web",
		href: "https://s2-tech-training-center.vercel.app",
	},
	{
		title: "Hiking",
		image: "tixly.png",
		tags: ["Android Native"],
		platform: "mobile",
		href: "",
	},
	{
		title: "University Magazine Portal",
		image: "p6.png",
		tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
		platform: "web",
		href: "https://uni-voice-teamgpc4.vercel.app/login",
	},
];

const ITEMS_PER_PAGE = 4;

var imagesPath = "assets/images/projects/";

const portfolioWrapper = document.querySelector("#portfolio .wrapper");
const projectsContainer = document.querySelector("#portfolio .projects");

// Filter tabs
const filterDefs = [
	{ label: '<i class="fa-solid fa-display"></i> Web', value: "web" },
	{ label: '<i class="fa-solid fa-mobile-screen-button"></i> Mobile', value: "mobile" },
];

const filterContainer = document.createElement("div");
filterContainer.className = "portfolio__filters";
filterContainer.innerHTML = filterDefs
	.map((f, i) => `<button class="portfolio__filter${i === 0 ? " active" : ""}" data-filter="${f.value}">${f.label}</button>`)
	.join("");
portfolioWrapper.insertBefore(filterContainer, projectsContainer);

const platformBadge = {
	web: `<div class="project__platform"><i class="fa-solid fa-display" title="Web App"></i></div>`,
	mobile: `<div class="project__platform"><i class="fa-solid fa-mobile-screen-button" title="Mobile App"></i></div>`,
	both: `<div class="project__platform project__platform--both"><i class="fa-solid fa-display" title="Web App"></i><i class="fa-solid fa-mobile-screen-button" title="Mobile App"></i></div>`,
};

const projectLayout = ({ title, image, tags, platform }) => `
    <div class="project__content">
        <img class="project__image" src="${imagesPath}${image}" />
        ${platformBadge[platform] || ""}
        <ul class="project__tags">
            ${tags.map((tag) => `<li class="project__tag">${tag}</li>`).join("")}
        </ul>
    </div>
    <h4 class="project__title">${title}</h4>
`;

// Pagination container
const paginationContainer = document.createElement("div");
paginationContainer.className = "portfolio__pagination";
projectsContainer.insertAdjacentElement("afterend", paginationContainer);

// Render all project elements once
const projectElements = Projects.map((project) => {
	const el = document.createElement("a");
	el.href = project.href;
	el.target = "_blank";
	el.className = "project";
	el.dataset.platform = project.platform;
	el.innerHTML = projectLayout(project);
	projectsContainer.appendChild(el);
	return el;
});

let currentFilter = "web";
let projectsPage = 1;

function getFiltered() {
	return projectElements.filter((el) => {
		const p = el.dataset.platform;
		return p === currentFilter || p === "both";
	});
}

function renderPage() {
	const filtered = getFiltered();
	const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
	const start = (projectsPage - 1) * ITEMS_PER_PAGE;
	const end = start + ITEMS_PER_PAGE;

	projectElements.forEach((el) => (el.style.display = "none"));
	filtered.slice(start, end).forEach((el) => (el.style.display = ""));

	renderPagination(totalPages);
}

function renderPagination(totalPages) {
	if (totalPages <= 1) {
		paginationContainer.innerHTML = "";
		return;
	}

	const pages = [];

	pages.push(
		`<button class="pagination__btn pagination__prev" ${projectsPage === 1 ? "disabled" : ""} data-page="${projectsPage - 1}">
			<i class="fa-solid fa-chevron-left"></i>
		</button>`
	);

	for (let i = 1; i <= totalPages; i++) {
		pages.push(
			`<button class="pagination__btn pagination__page${i === projectsPage ? " active" : ""}" data-page="${i}">${i}</button>`
		);
	}

	pages.push(
		`<button class="pagination__btn pagination__next" ${projectsPage === totalPages ? "disabled" : ""} data-page="${projectsPage + 1}">
			<i class="fa-solid fa-chevron-right"></i>
		</button>`
	);

	paginationContainer.innerHTML = pages.join("");
}

// Filter click
filterContainer.addEventListener("click", (e) => {
	const btn = e.target.closest(".portfolio__filter");
	if (!btn) return;

	filterContainer.querySelectorAll(".portfolio__filter").forEach((b) => b.classList.remove("active"));
	btn.classList.add("active");

	currentFilter = btn.dataset.filter;
	projectsPage = 1;
	renderPage();
});

// Pagination click
paginationContainer.addEventListener("click", (e) => {
	const btn = e.target.closest(".pagination__btn");
	if (!btn || btn.disabled) return;

	projectsPage = parseInt(btn.dataset.page);
	renderPage();

	document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth", block: "start" });
});

// Initial render
renderPage();
