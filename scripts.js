// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const articles = [
        {
            title: "Product Owner",
            details: "Experience: 10 years; Location: Bangalore",
            contact: "Referral Contact: abc@abc.com",
            link: "https://www.example.com/product-owner-job"
        },
        {
            title: "Business Analyst",
            details: "Experience: 5 years; Location: Chennai",
            contact: "Referral Contact: xyz@xyz.com",
            link: "https://www.example.com/business-analyst-job"
        },
        {
            title: "Software Engineer",
            details: "Experience: 2 years; Location: Delhi",
            contact: "Referral Contact: 123456",
            link: "https://www.example.com/software-engineer-job"
        },
        // Add more articles as needed
    ];

    const itemsPerPage = 5;
    let currentPage = 1;
    let filteredArticles = [...articles];

    const articlesSection = document.getElementById("articles");
    const searchInput = document.getElementById("search-input");
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    function renderArticles(page) {
        articlesSection.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedArticles = filteredArticles.slice(start, end);

        paginatedArticles.forEach(article => {
            const articleElement = document.createElement("article");

            const titleElement = document.createElement("h2");
            titleElement.textContent = article.title;

            const detailsElement = document.createElement("p");
            detailsElement.textContent = article.details;

            const contactElement = document.createElement("p");
            contactElement.textContent = article.contact;

            const linkElement = document.createElement("a");
            linkElement.href = article.link;
            linkElement.textContent = "Job Link";
            linkElement.target = "_blank";

            articleElement.appendChild(titleElement);
            articleElement.appendChild(detailsElement);
            articleElement.appendChild(contactElement);
            articleElement.appendChild(linkElement);

            articlesSection.appendChild(articleElement);
        });

        pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredArticles.length / itemsPerPage)}`;
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === Math.ceil(filteredArticles.length / itemsPerPage);
    }

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        filteredArticles = articles.filter(article => article.title.toLowerCase().includes(query));
        currentPage = 1; // Reset to the first page
        renderArticles(currentPage);
    }

    searchInput.addEventListener("input", handleSearch);

    prevPageButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderArticles(currentPage);
        }
    });

    nextPageButton.addEventListener("click", () => {
        if (currentPage < Math.ceil(filteredArticles.length / itemsPerPage)) {
            currentPage++;
            renderArticles(currentPage);
        }
    });

    // Initial render
    renderArticles(currentPage);
});
