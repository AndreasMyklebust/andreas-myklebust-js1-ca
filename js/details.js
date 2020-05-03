const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const containerDiv = document.querySelector(".detailsDiv");

const url = "https://api.punkapi.com/v2/beers/";
const beerUrl = url + id;

async function fetchBrewDog() {
   try {
      const response = await fetch(beerUrl);
      const brewDog = await response.json();
      createBeerDetails(brewDog);
      console.log(brewDog);
   } catch (error) {
      console.log(error);
      displayError();
   }
}
function displayError() {
   let html = "";

   html += ` <h1>Ooops.. Something went wrong!</h1>`;

   conatinerDiv.innerHTML = html;
}

fetchBrewDog();

function createBeerDetails(brewDog) {
   for (let i = 0; i < brewDog.length; i++) {
      const beerImage = document.querySelector("img");
      const nameHeader = document.querySelector(".detailsName");
      const detailsTagline = document.querySelector(".detailsTagline");
      const descriptionText = document.querySelector(".descriptionText");
      const brewTipsText = document.querySelector(".brewTipText");
      const brewer = document.querySelector(".brewer");
      const pageTitle = document.querySelector("title");

      beerImage.src = brewDog[i].image_url;
      nameHeader.innerHTML = brewDog[i].name;
      detailsTagline.innerHTML = brewDog[i].tagline;
      descriptionText.innerHTML = brewDog[i].description;
      brewTipsText.innerHTML = brewDog[i].brewers_tips;
      brewer.innerHTML = brewDog[i].contributed_by;
      pageTitle.innerText = brewDog[i].name;
   }
}
