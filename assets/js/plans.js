const Plans = [
	{
		name: "Basic",
		description: "Have a design ready or need a simple web project?",
		pricePerHour: 25,
		features: [
			"Frontend development (HTML / CSS / React.js)",
			"Responsive layout",
			"RESTful API integration",
			"Remote / Online",
			"Delivery within agreed timeline",
			"Support 1 month",
		],
	},
	{
		name: "Premium",
		description: "Need design and development from scratch?",
		pricePerHour: 50,
		features: [
			"Wireframe & UI design with Figma",
			"Frontend + Backend development",
			"Database setup (MongoDB / PostgreSQL)",
			"Graphic assets (Canva / Photoshop)",
			"Remote / Online",
			"Support 3 months",
			"Your project is always a priority",
		],
	},
];

const plansContainer = document.querySelector("#pricing .pricing__wrapper");

Plans.forEach((plan) => {
	const planElement = document.createElement("div");
	planElement.className = "plan";

	var planHeader = document.createElement("div");
	planHeader.className = "plan__header";

	var name = document.createElement("p");
	name.className = "plan__name";
	name.textContent = plan.name;

	var description = document.createElement("p");
	description.classList = "plan__description";
	description.textContent = plan.description;

	var planTop = document.createElement("div");
	planTop.className = "plan__top";
	planTop.appendChild(name);
	planTop.appendChild(description);

	planHeader.appendChild(planTop);

	var planPrice = document.createElement("p");
	planPrice.className = "plan__price";
	planPrice.innerHTML = `<span>$${plan.pricePerHour}</span>/ hours`;
	planHeader.appendChild(planPrice);

	planElement.appendChild(planHeader);

	var planFeatures = document.createElement("ul");
	planFeatures.className = "plan__features";

	plan.features.forEach((feature) => {
		var planFeature = document.createElement("li");
		planFeature.className = "plan__feature";
		planFeature.textContent = feature;
		planFeatures.appendChild(planFeature);
	});
	planElement.appendChild(planFeatures);

	const pickButton = document.createElement("button");
	pickButton.classList.add("plan__pick-button", "btn-primary", "btn-block");
	pickButton.textContent = "Pick this package";
	planElement.appendChild(pickButton);

	plansContainer.appendChild(planElement);
});
