const Skills = [
	
	{
		name: "CSS3 / Tailwind",
		percentage: 0.88,
	},
	{
		name: "JavaScript / React.js",
		percentage: 0.85,
	},
	{
		name: "SASS",
		percentage: 0.70,
	},
	{
		name: "Node.js / Express/ NestJS",
		percentage: 0.65,
	},
	{
		name: "Java",
		percentage: 0.6,
	},
	{
		name: "MongoDB / PostgreSQL",
		percentage: 0.70,
	},
	{
		name: "Flutter",
		percentage: 0.85,
	},
	{
		name: "Docker",
		percentage: 0.65,
	},
	{
		name: "React Native",
		percentage: 0.65,
	},
	{
		name: "AI-Assisted Dev (Claude Code)",
		percentage: 0.85,
	},
];

const skillsContainer = document.querySelector("#skills .skills__wrapper");

const skillLayout = ({ name, percentage }) => `
    <div class="skill-bar__header">
        <span class="skill-bar__name">${name}</span>
        <span class="skill-bar__percent">${percentage * 100}%</span>
    </div>
    <div class="skill-bar__track">
        <div class="skill-bar__fill" style="width: ${percentage * 100}%"></div>
    </div>
`;

Skills.forEach((skill) => {
	const skillElement = document.createElement("div");
	skillElement.className = "skill-bar";
	skillElement.innerHTML = skillLayout(skill);
	skillsContainer.appendChild(skillElement);
});
