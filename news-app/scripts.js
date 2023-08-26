const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

function displayNews(articles) {
  const newsDiv = document.querySelector("#news");
  for (const article of articles) {
    const articleDiv = document.createElement("article");

    //create and append a headline to the articleDiv
    const title = document.createElement("h4");
    title.textContent = article.title;
    articleDiv.appendChild(title);
   

    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.width = 1024;
    img.height = 576;
    img.alt = article.author + " - " + article.title;
    articleDiv.appendChild( img );
    
    const author = document.createElement("caption");
    author.textContent = article.description;
    articleDiv.appendChild( author );
    
     const pubBy = document.createElement("p");
      pubBy.textContent = article.publishedAt;
     articleDiv.appendChild(pubBy);
    // TODO: Use document.createElement and appendChild to create and append more elements

    newsDiv.appendChild(articleDiv);
  }
}


async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log( data );
    displayNews(data.articles);
    // TODO: Add a function call to display the news
  } catch (error) {
    console.error("There was an error!", error);
  }
}

fetchNews();
