const Services = [
	{
		name: "Full-Stack Development",
		description:
			"Building modern web applications with React.js, Next.js, and Node.js, covering both frontend and backend systems with RESTful API integration.",
		projectsCount: "8+",
		icon: '<i class="fa-solid fa-code fa-fw icon"></i>',
	},
	{
		name: "Cross-Platform Development",
		description: "Developing scalable digital products that deliver seamless experiences across web, mobile, and desktop platforms using contemporary development tools.",
		projectsCount: "2+",
		icon: '<i class="fa-solid fa-layer-group fa-fw icon"></i>',
	},
	{
		name: "UI/UX Design",
		description: "Designing clean, user-centered interfaces and wireframes using Figma, focused on intuitive and accessible experiences across all platforms.",
		projectsCount: "2+",
		icon: '<i class="fa-solid fa-pen-ruler fa-fw icon"></i>',
	},
];

const servicesContainer = document.querySelector(
	"#services .services__wrapper"
);

const serviceLayout = ({ name, description, projectsCount, icon }) => `
	<h4 class="service__name">${name}</h4>
	<p class="service__description">${description}</p>
	<span class="service__projects">${projectsCount} Projects</span>
	${icon}
`;

Services.forEach((service) => {
	const serviceElement = document.createElement("div");
	serviceElement.className = "service";
	serviceElement.innerHTML = serviceLayout(service);
	servicesContainer.appendChild(serviceElement);
});
