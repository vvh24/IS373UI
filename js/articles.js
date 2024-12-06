// JavaScript to Fetch and Display Articles
document.addEventListener("DOMContentLoaded", async () => {
    const articlesContainer = document.getElementById("articles-container");
    const allArticlesContainer = document.getElementById("all-articles-container");
  
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://api.is373project.me/jsonapi');
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
  
    const renderArticles = (articles, container, limit = null) => {
      if (!articles || articles.length === 0) {
        container.innerHTML = "<p>No articles available.</p>";
        return;
      }
  
      const displayArticles = limit ? articles.slice(0, limit) : articles;
  
      container.innerHTML = displayArticles
        .map(
          (article) => `
          <div class="article-card">
            <h3>${article.attributes.title}</h3>
            <p>${article.attributes.body.processed.slice(0, 150)}...</p>
            <a href="./article-details.html?id=${article.id}">Read More</a>
          </div>`
        )
        .join("");
    };
  
    const articles = await fetchArticles();
    if (articlesContainer) renderArticles(articles, articlesContainer, 3);
    if (allArticlesContainer) renderArticles(articles, allArticlesContainer);
  });
  