const articlesContainer = document.getElementById('all-articles-container');


fetch('https://api.is373project.me/jsonapi/node/article')
  .then(response => response.json())
  .then(data => {
    data.data.forEach(article => {
     
      const articleCard = document.createElement('div');
      articleCard.classList.add('article-card');

      
      articleCard.innerHTML = `
        <div class="article-content">
          <h3>${article.attributes.title}</h3>
          <p>${article.attributes.body.value}</p>
        </div>
      `;

      
      articlesContainer.appendChild(articleCard);
    });
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
    articlesContainer.innerHTML = '<p>Error loading articles. Please try again later.</p>';
  });
