document.addEventListener("DOMContentLoaded", async () => {
    const articlesContainer = document.getElementById("articles-container");
  
    const fetchFeaturedArticles = async () => {
      try {
        const response = await fetch('https://api.is373project.me/jsonapi');
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error fetching featured articles:", error);
      }
    };
  
    const renderFeaturedArticles = (articles) => {
      if (!articles || articles.length === 0) {
        articlesContainer.innerHTML = "<p>No featured articles available.</p>";
        return;
      }
  
      articlesContainer.innerHTML = articles
        .slice(0, 3) // Display only 3 articles
        .map(
          (article) => `
          <div class="article-card">
            <h3>${article.attributes.title}</h3>
            <p>${article.attributes.body.processed.slice(0, 150)}...</p>
            <a href="./articles.html?id=${article.id}" class="read-more-link">Read More</a>
          </div>`
        )
        .join("");
    };
  
    const articles = await fetchFeaturedArticles();
    renderFeaturedArticles(articles);
  });
  