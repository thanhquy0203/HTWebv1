document.addEventListener("DOMContentLoaded", function() {
    var cardTextElements = document.getElementsByClassName("card-text");
  
    for (var i = 0; i < cardTextElements.length; i++) {
      var cardText = cardTextElements[i];
      var originalHeight = cardText.clientHeight;
  
      if (cardText.scrollHeight > originalHeight) {
        cardText.classList.add("expandable");
        cardText.addEventListener("click", function() {
          this.classList.toggle("expanded");
        });
      }
    }
  });