const POSTS_PER_PAGE = 2;
let currentPage = 1;

const blogContainer = document.querySelector("#blog .blog__wrapper");

function blogPostLayout({ id, title, date, image, excerpt, tags }) {
	return `
		<img class="blog-post__image" src="${image}" alt="${title}" />
		<div class="blog-post__body">
			<div class="blog-post__tags">
				${tags.map((tag) => `<span class="blog-post__tag">${tag}</span>`).join("")}
			</div>
			<span class="blog-post__date">${date}</span>
			<h4 class="blog-post__title">${title}</h4>
			<p class="blog-post__excerpt">${excerpt}</p>
			<a class="blog-post__link" href="blog-post.html?id=${id}">Read more &rarr;</a>
		</div>
	`;
}

function renderBlogPosts() {
	blogContainer.innerHTML = "";
	const start = (currentPage - 1) * POSTS_PER_PAGE;
	const pagePosts = BlogPostsData.slice(start, start + POSTS_PER_PAGE);

	pagePosts.forEach((post) => {
		const el = document.createElement("div");
		el.className = "blog-post";
		el.innerHTML = blogPostLayout(post);
		blogContainer.appendChild(el);
	});

	renderPagination();
}

function renderPagination() {
	const existing = document.getElementById("blogPagination");
	if (existing) existing.remove();

	const totalPages = Math.ceil(BlogPostsData.length / POSTS_PER_PAGE);
	if (totalPages <= 1) return;

	const pag = document.createElement("div");
	pag.id = "blogPagination";
	pag.className = "blog-pagination";

	const prevBtn = document.createElement("button");
	prevBtn.className = "blog-pagination__btn";
	prevBtn.textContent = "← Prev";
	prevBtn.disabled = currentPage === 1;
	prevBtn.addEventListener("click", () => { currentPage--; renderBlogPosts(); });

	const info = document.createElement("span");
	info.className = "blog-pagination__info";
	info.textContent = `${currentPage} / ${totalPages}`;

	const nextBtn = document.createElement("button");
	nextBtn.className = "blog-pagination__btn";
	nextBtn.textContent = "Next →";
	nextBtn.disabled = currentPage === totalPages;
	nextBtn.addEventListener("click", () => { currentPage++; renderBlogPosts(); });

	pag.appendChild(prevBtn);
	pag.appendChild(info);
	pag.appendChild(nextBtn);
	blogContainer.after(pag);
}

renderBlogPosts();
