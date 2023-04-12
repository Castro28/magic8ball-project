function showFortune() {
    const fortunes = [
      { fortune: "It is certain.", image:"images/magic8ball_1.png" },
      { fortune: "It is decidedly so.", image: "images/magic8ball_2.png" },
      { fortune: "Without a doubt.", image: "images/magic8ball_3.png" }
    ];
  
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let fortune = fortunes[randomIndex];
  
    let fortuneDiv = document.getElementById("fortune");
    let imageElement = document.createElement("img");
    imageElement.src = fortune.image;
    fortuneDiv.innerHTML = "<h2>Your Fortune:</h2><p>" + fortune.fortune + "</p>";
    fortuneDiv.appendChild(imageElement);
  }
