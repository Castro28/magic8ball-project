let fortunes = [
  {
    fortune: "It is certain.",
    images: [
      "images/magic8ball_1.png",
      "images/magic8ball_4.png",
      "images/magic8ball_5.png",
    ],
  },
  {
    fortune: "It is decidedly so.",
    images: [
      "images/magic8ball_2.png",
      "images/magic8ball_6.png",
      "images/magic8ball_7.png",
    ],
  },
  {
    fortune: "Without a doubt.",
    images: [
      "images/magic8ball_3.png",
      "images/magic8ball_8.png",
      "images/magic8ball_9.png",
    ],
  },
  {
    fortune: "Cannot predict now.",
    images: [
      "images/magic8ball_start.png",
    ],
  },
];


const showFortune = () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const { fortune, images } = fortunes[randomIndex];
  
  const randomImageIndex = Math.floor(Math.random() * images.length);
  const imagePath = images[randomImageIndex];

  const fortuneDiv = document.getElementById("fortune");
  const imageElement = document.createElement("img");
  imageElement.src = imagePath;
  fortuneDiv.innerHTML = `<h2>Your Fortune:</h2><p>${fortune}</p>`;
  fortuneDiv.appendChild(imageElement);
};

