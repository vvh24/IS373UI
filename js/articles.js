document.addEventListener("DOMContentLoaded", async () => {
    const allArticlesContainer = document.getElementById("all-articles-container");
  
    const fetchAllArticles = async () => {
      try {
        const response = await fetch('https://api.is373project.me/jsonapi');
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error fetching all articles:", error);
      }
    };
  
    const renderAllArticles = (articles) => {
      if (!articles || articles.length === 0) {
        allArticlesContainer.innerHTML = "<p>No articles available.</p>";
        return;
      }
  
      allArticlesContainer.innerHTML = articles
        .map(
          (article) => `
          <div class="article-card">
            <h3>${article.attributes.title}</h3>
            <p>${article.attributes.body.processed.slice(0, 200)}...</p>
            <p><strong>Published:</strong> ${new Date(article.attributes.created).toLocaleDateString()}</p>
            <a href="./articles.html?id=${article.id}" class="read-more-link">Read More</a>
          </div>`
        )
        .join("");
    };
  
    const articles = await fetchAllArticles();
    renderAllArticles(articles);
  });
  