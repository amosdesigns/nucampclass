const url = "https://api.thecatapi.com/v1/images/search";

async function fetchCat() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    displayCat(data[0]);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

function displayCat(imageUrl) {
  console.table(imageUrl);
  const img = document.createElement("img");
  img.src = imageUrl.url;
  img.alt = "Random Cat photo";
  img.width = imageUrl.width;
  img.height = imageUrl.height;
  document.querySelector("#cat").appendChild(img);
}
