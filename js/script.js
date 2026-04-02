let score = 0;
let timeLeft = 30;
let timerId = null;
let level = 1;

const player = document.getElementById("player");
let posX = 50;
let posY = 50;

function startGame() {
  score = 0;
  timeLeft = 30;
  level = 1;
  document.getElementById("score").innerText = "Score: 0";
  document.getElementById("timer").innerText = "Time: 30s";
  document.getElementById("level").innerText = "Level: 1";

  if (timerId) clearInterval(timerId);
  spawnCoins();

  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "Time: " + timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(timerId);
      alert("Game Over! Your score: " + score);
    }
  }, 1000);
}

document.addEventListener("keydown", (event) => {
  const step = 10;
  switch (event.key) {
    case "ArrowUp": posY -= step; break;
    case "ArrowDown": posY += step; break;
    case "ArrowLeft": posX -= step; break;
    case "ArrowRight": posX += step; break;
  }
  player.style.left = posX + "px";
  player.style.top = posY + "px";
  checkCollision();
});

function checkCollision() {
  const coins = document.querySelectorAll(".coin");
  const playerRect = player.getBoundingClientRect();

  coins.forEach((coin) => {
    const coinRect = coin.getBoundingClientRect();
    if (
      playerRect.left < coinRect.right &&
      playerRect.right > coinRect.left &&
      playerRect.top < coinRect.bottom &&
      playerRect.bottom > coinRect.top
    ) {
      coin.remove();
      score++;
      document.getElementById("score").innerText = "Score: " + score;
    }
  });

  if (document.querySelectorAll(".coin").length === 0) {
    nextLevel();
  }
}

function spawnCoins() {
  const gameArea = document.getElementById("gameArea");
  gameArea.querySelectorAll(".coin").forEach(c => c.remove());

  for (let i = 0; i < level + 2; i++) {
    const coin = document.createElement("div");
    coin.className = "coin";
    coin.style.left = Math.floor(Math.random() * 350) + "px";
    coin.style.top = Math.floor(Math.random() * 350) + "px";
    gameArea.appendChild(coin);
  }
}

function nextLevel() {
  level++;
  document.getElementById("level").innerText = "Level: " + level;
  spawnCoins();
}
