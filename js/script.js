const url = "https://api.punkapi.com/v2/beers?page=1&per_page=50";
let heading = document.querySelector(".heading");
let createdBy = document.querySelector(".createdBy");

async function fetchBrewDogs() {
   try {
      const response = await fetch(url);
      const brewDogArray = await response.json();
      createCard(brewDogArray);
   } catch (error) {
      console.log(error);
      displayError();
   }
}

fetchBrewDogs();

function createCard(brewDogArray) {
   const resultsContainer = document.querySelector(".results");

   let html = "";

   for (let i = 0; i < brewDogArray.length; i++) {
      html += ` <div class="card">
                        <div class="imageDiv">
                            <img class="image" src="${brewDogArray[i].image_url}" alt="${brewDogArray[i].name}" />
                        </div>
                         <div class="details">
                            <h3 class="name">${brewDogArray[i].name}</h3>
                            <p class="tagline">${brewDogArray[i].tagline}</p>
                            <div>
                                <p>This beer as been served ice cold since ${brewDogArray[i].first_brewed}</p>
                            </div>
                            <a class="btn btn-primary" href="details.html?id=${brewDogArray[i].id}">Details</a>
                        </div>
                    </div>`;
   }

   resultsContainer.innerHTML = html;
}

/* 

Unfortunately I had a struggle with the error handling at the index.html and details.html. 
I tried to write functions, and execute them in the catch method, that would change the headings to a simple error message, but the code 
in the catch block never seemed to be executed. I tried to create errors with the URLs and in the functions, 
but the console gave me the same output regardless of what was written in the catch block of the API call. 

Also struggled a bit with the single function length check, and could not find any obvious solution on 
how to check for multiple values in a single function. 

On the contact page, the correct error message for the email input was displayed when empty/unvalid input, but this broke when I 
added the displayMessage function to update the header element and had to call the structureCheck function. 
It would have been solved by wrapping tha last if (contact.js line 99) in a function X and calling function X 
in the if in the structurCheck function. This caused a "Maximum call stack error". 

All in all this has been, by far, the most exciting course, can´t wait to do more Javascript!

*/
