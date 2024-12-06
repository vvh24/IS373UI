document.addEventListener("DOMContentLoaded", async () => {
    const aboutContainer = document.querySelector(".about");
  
    const fetchAboutContent = async () => {
      try {
        const response = await fetch('https://api.is373project.me/jsonapi');
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        return data.data[0]; // Assuming the first article contains "About Us" content
      } catch (error) {
        console.error("Error fetching about content:", error);
      }
    };
  
    const renderAboutContent = (article) => {
      if (!article) {
        aboutContainer.innerHTML = "<p>About content is currently unavailable.</p>";
        return;
      }
  
      aboutContainer.innerHTML += `
        <h2>${article.attributes.title}</h2>
        <p>${article.attributes.body.processed}</p>
      `;
    };
  
    const aboutArticle = await fetchAboutContent();
    renderAboutContent(aboutArticle);
  });
  