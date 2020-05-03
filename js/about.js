const textContainer = document.querySelectorAll("p");

function swapWords() {
   for (let i = 0; i < textContainer.length; i++) {
      const swappedText = textContainer[i].innerText
         .replace(/the /g, "banana ")
         .replace(/The /g, "Banana ");

      textContainer[i].innerText = swappedText;
   }
}

setTimeout(swapWords, 3000);
