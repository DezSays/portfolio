import content from "./blogNavs.js";

document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");

  content.forEach((item) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    const blogImageContainer = document.createElement("div");
    blogImageContainer.classList.add("blog-image-container");

    const blogImage = document.createElement("img");
    blogImage.classList.add("blog-image");
    blogImage.src = item.img;
    blogImage.alt = item.title;

    const blogTitle = document.createElement("h3");
    blogTitle.classList.add("blog-title");
    blogTitle.textContent = item.title;

    const blogDescription = document.createElement("p");
    blogDescription.classList.add("blog-description");
    blogDescription.textContent = item.description;

    const readMoreButton = document.createElement("button");
    readMoreButton.classList.add("read-more-button");
    readMoreButton.textContent = "Read More";

    // Add event listener to open the blog URL in a new tab
    readMoreButton.addEventListener("click", () => {
      window.open(item.url, "_blank");
    });

    blogImageContainer.appendChild(blogImage);
    blogImageContainer.appendChild(blogDescription);

    blogCard.appendChild(blogImageContainer);
    blogCard.appendChild(blogTitle);
    blogCard.appendChild(readMoreButton);

    blogContainer.appendChild(blogCard);
  });
});
