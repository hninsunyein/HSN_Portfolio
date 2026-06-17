const Clients = [
	{
		name: "Myat Min Swe",
		image: "mms.jpg",
		job: "Director",
		company: "Spiceworks Myanmar Co.Ltd",
		quote:
			"Your association with us was very creative and we wish all the best for you in your future endeavors.",
	},
	{
		name: "Ms. Sandar Nyunt",
		image: "crystal.jpg",
		job: "HR Manager & Secretary",
		company: "Kumo Solutions Co.Ltd",
		quote:
			"She has grasped most of the modern technologies and quick learning capability ensures her stays updated with the recent advancements. She was always a very thoughtful and considerate worker who can do some fantastic jobs. So, I want to recommend her strongly for your company as a very dependable and efficient Software developer.",
	},
	
];

var imagesPath = "assets/images/clients/";

const clientsContainer = document.querySelector("#testimonial .slider-wrapper");

const clientLayout = ({ name, image, job, company, quote }) => `
    <div class="client__header">
        <img class="client__image" src="${imagesPath}${image}" />
        <div class="client__info">
            <h6 class="client__name">${name}</h6>
            <p class="client__job">
                ${job} of <span class="client__company">${company}</span>
            </p>
        </div>
	</div>
	<q class="client__quote">${quote}</q>

`;

Clients.forEach((client) => {
	const clientElement = document.createElement("div");
	clientElement.classList.add("client", "slider-slide");
	clientElement.innerHTML = clientLayout(client);
	clientsContainer.appendChild(clientElement);
});

// Slider
const slider = document.getElementById("clientsSlider");
const sliderWrapper = slider.querySelector(".slider-wrapper");
const slides = sliderWrapper.getElementsByClassName("slider-slide");
const prevBtn = slider.querySelector(".slider-button-prev");
const nextBtn = slider.querySelector(".slider-button-next");

let currentSlide = 0;

function showSlide() {
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
	}

	slides[currentSlide].classList.add("active");
}

function moveToNextSlide() {
	slides[currentSlide].classList.remove("active");
	currentSlide++;

	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}

	slides[currentSlide].classList.add("active");
}

function moveToPrevSlide() {
	slides[currentSlide].classList.remove("active");
	currentSlide--;

	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}

	slides[currentSlide].classList.add("active");
}

prevBtn.addEventListener("click", function () {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	showSlide();
});

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);

showSlide();
