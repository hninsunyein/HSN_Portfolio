const ExperienceTimelines = [
	{
		date: "Dec 2023 – Jun 2025",
		experiences: [
			{ title: "Frontend Developer", description: "Freelance · Remote" },
		],
	},
	{
		date: "Mar 2023 – Jul 2023",
		experiences: [
			{ title: "Web Developer", description: "Kumo Solutions Co.Ltd · Mandalay, Myanmar (NXOps – Evercomm Singapore)" },
		],
	},
	// {
	// 	date: "Aug 2021 – Jan 2023",
	// 	experiences: [
	// 		{ title: "Senior Instructor", description: "S2 Tech Training Center · Remote" },
	// 	],
	// },
	{
		date: "Jan 2019 – Jan 2021",
		experiences: [
			{ title: "Frontend Developer", description: "University of Technology (Yatanarpon Cyber City) · Part-time" },
		],
	},
	{
		date: "Oct 2019 – Dec 2019",
		experiences: [
			{ title: "Web Developer (Internship)", description: "Spiceworks Myanmar Co.Ltd · Yangon, Myanmar" },
		],
	},
];

const EducationTimelines = [
	{
		date: "Jun 2025 – Jun 2026",
		experiences: [
			{ title: "B.Sc (Hons) Computing", description: "University of Greenwich, UK" },
		],
	},
	{
		date: "Dec 2014 – Dec 2020",
		experiences: [
			{ title: "B.E Information Science & Technology", description: "University of Technology (Yatanarpon Cyber City), Myanmar · GPA 4.07 / 5.0" },
		],
	},
];

const timeLineLayout = ({ date, experiences }) => `
    <p class="timeline__date">${date}</p>
    <ul class="timeline__experiences">
        ${experiences
					.map(
						(e) => `
            <li class="timeline__experience experience">
                <h5 class="experience__title">${e.title}</h5>
                <p class="experience__description">${e.description}</p>
            </li>`
					)
					.join("")}
    </ul>
`;

function renderTimelines(data, containerId) {
	const container = document.getElementById(containerId);
	data.forEach((item) => {
		const el = document.createElement("div");
		el.className = "timeline";
		el.innerHTML = timeLineLayout(item);
		container.appendChild(el);
	});
}

renderTimelines(ExperienceTimelines, "experience-timelines");
renderTimelines(EducationTimelines, "education-timelines");
