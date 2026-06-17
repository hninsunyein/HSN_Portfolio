// Apply saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
	themeToggle.querySelector("i").className =
		savedTheme === "light" ? "fa-solid fa-moon fa-fw" : "fa-solid fa-sun fa-fw";

	themeToggle.addEventListener("click", () => {
		const current = document.documentElement.getAttribute("data-theme");
		const next = current === "light" ? "dark" : "light";
		document.documentElement.setAttribute("data-theme", next);
		localStorage.setItem("theme", next);
		themeToggle.querySelector("i").className =
			next === "light" ? "fa-solid fa-moon fa-fw" : "fa-solid fa-sun fa-fw";
	});
}

const params = new URLSearchParams(window.location.search);
const postId = parseInt(params.get("id"));
const post = BlogPostsData.find((p) => p.id === postId);

const articleEl = document.getElementById("blogArticle");

if (post) {
	document.title = `${post.title} — Hnin Su Nyein`;
	articleEl.innerHTML = `
		<div class="blog-article__header">
			<div class="blog-post__tags">
				${post.tags.map((t) => `<span class="blog-post__tag">${t}</span>`).join("")}
			</div>
			<h1 class="blog-article__title">${post.title}</h1>
			<span class="blog-post__date">${post.date}</span>
		</div>
		<img class="blog-article__image" src="${post.image}" alt="${post.title}" />
		<div class="blog-article__content">${post.content}</div>
	`;
} else {
	articleEl.innerHTML = "<p>Post not found.</p>";
}
