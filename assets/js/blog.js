import content from './blogNavs.js';
const blogContainer = document.getElementById('blog-container');

const blogCard = document.createElement('div');
blogCard.classList.add('blog-card');

const blogImageContainer = document.createElement('div');
blogImageContainer.classList.add('blog-image-container');

const blogImage = document.createElement('img');
blogImage.classList.add('blog-image');
blogImage.src = content.img;
blogImage.alt = `${content.title}`;

const blogTitle = document.createElement('h3');
blogTitle.classList.add('blog-title');
blogTitle.textContent = content.title;

const blogDescription = document.createElement('p');
blogDescription.classList.add('blog-description');
blogDescription.textContent = content.description;

const readMoreButton = document.createElement('button');
readMoreButton.classList.add('read-more-button');
readMoreButton.textContent = 'Read More';

// Add event listener to open the blog URL in a new tab
readMoreButton.addEventListener('click', () => {
  window.open(content.url, '_blank');
});

blogImageContainer.appendChild(blogImage);
blogImageContainer.appendChild(blogDescription);

blogCard.appendChild(blogImageContainer);
blogCard.appendChild(blogTitle);
blogCard.appendChild(readMoreButton);

blogContainer.appendChild(blogCard);
