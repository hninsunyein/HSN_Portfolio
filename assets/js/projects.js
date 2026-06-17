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
		title: "Smart Mom (Mobile)",
		image: "pm1.jpg",
		tags: ["React Native"],
		platform: "mobile",
		apk: "smartmom.apk",
	},
	{
		title: "Study Tracker",
		textCard: true,
		description: "An AI-assisted study session tracker built with Claude Code. Log subjects, track daily progress, and visualise study habits over time.",
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
		title: "S2Exchange (Mobile)",
		image: "pm2.jpg",
		tags: ["Flutter", "Python", "Django Flask"],
		platform: "mobile",
		apk: "s2exchange.apk",
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
		image: "pm3.jpg",
		tags: ["Flutter"],
		platform: "mobile",
		apk: "hiking.apk",
	},
	{
		title: "University Magazine Portal",
		textCard: true,
		description: "A student magazine submission and management portal for the University of Greenwich. Built with Next.js, Tailwind CSS, and PostgreSQL.",
		tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
		platform: "web",
		href: "https://uni-voice-teamgpc4.vercel.app/login",
	},
];

const ITEMS_PER_PAGE = 2;

var imagesPath = "assets/images/projects/";
var apkPath = "assets/apk/";

const portfolioWrapper = document.querySelector("#portfolio .wrapper");
const projectsContainer = document.querySelector("#portfolio .projects");

const platformBadge = {
	web: `<div class="project__platform"><i class="fa-solid fa-display" title="Web App"></i></div>`,
	mobile: `<div class="project__platform"><i class="fa-solid fa-mobile-screen-button" title="Mobile App"></i></div>`,
	both: `<div class="project__platform project__platform--both"><i class="fa-solid fa-display" title="Web App"></i><i class="fa-solid fa-mobile-screen-button" title="Mobile App"></i></div>`,
};

const projectLayout = ({ title, image, textCard, description, tags, platform, apk }) => `
    <div class="project__content${textCard ? " project__content--text" : ""}">
        ${textCard
            ? `<div class="project__text-card">
                <h4 class="project__text-card-title">${title}</h4>
                <p class="project__text-card-desc">${description}</p>
               </div>`
            : `<img class="project__image" src="${imagesPath}${image}" />`
        }
        ${platformBadge[platform] || ""}
    </div>
    <div class="project__info">
        <h4 class="project__title">${title}</h4>
        <ul class="project__tags">
            ${tags.map((tag) => `<li class="project__tag">${tag}</li>`).join("")}
        </ul>
        ${apk ? `<a class="project__apk" href="${apkPath}${apk}" download><i class="fa-solid fa-download"></i> Download APK</a>` : ""}
    </div>
`;

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

// Wrap projects grid with nav wrapper + arrows
const navWrapper = document.createElement("div");
navWrapper.className = "projects-nav";
projectsContainer.parentNode.insertBefore(navWrapper, projectsContainer);
navWrapper.appendChild(projectsContainer);

const prevArrow = document.createElement("button");
prevArrow.className = "projects-nav__arrow projects-nav__prev";
prevArrow.setAttribute("aria-label", "Previous");
prevArrow.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
navWrapper.insertBefore(prevArrow, projectsContainer);

const nextArrow = document.createElement("button");
nextArrow.className = "projects-nav__arrow projects-nav__next";
nextArrow.setAttribute("aria-label", "Next");
nextArrow.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
navWrapper.appendChild(nextArrow);

// Render all project elements once
const projectElements = Projects.map((project) => {
	const el = document.createElement(project.platform === "mobile" ? "div" : "a");
	el.className = "project";
	el.dataset.platform = project.platform;
	if (project.platform !== "mobile" && project.href) {
		el.href = project.href;
		el.target = "_blank";
	}
	el.innerHTML = projectLayout(project);
	projectsContainer.appendChild(el);
	return el;
});

let currentFilter = "web";
const pageState = {
	web: 1,
	mobile: 1,
};

function getFiltered() {
	return projectElements.filter((el) => {
		const p = el.dataset.platform;
		return p === currentFilter || p === "both";
	});
}

function renderPage() {
	const filtered = getFiltered();
	const page = pageState[currentFilter];
	const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
	const visible = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

	projectElements.forEach((el) => {
		el.style.display = "none";
		el.classList.remove("project--lone");
	});

	visible.forEach((el) => (el.style.display = ""));

	if (visible.length % 2 !== 0) {
		visible[visible.length - 1].classList.add("project--lone");
	}

	prevArrow.style.visibility = page > 1 ? "visible" : "hidden";
	nextArrow.style.visibility = page < totalPages ? "visible" : "hidden";
}

// Filter click
filterContainer.addEventListener("click", (e) => {
	const btn = e.target.closest(".portfolio__filter");
	if (!btn) return;

	filterContainer.querySelectorAll(".portfolio__filter").forEach((b) => b.classList.remove("active"));
	btn.classList.add("active");

	currentFilter = btn.dataset.filter;
	renderPage();
});

// Arrow clicks
prevArrow.addEventListener("click", () => {
	pageState[currentFilter] = Math.max(1, pageState[currentFilter] - 1);
	renderPage();
});

nextArrow.addEventListener("click", () => {
	const totalPages = Math.ceil(getFiltered().length / ITEMS_PER_PAGE);
	pageState[currentFilter] = Math.min(totalPages, pageState[currentFilter] + 1);
	renderPage();
});

// Initial render
renderPage();
