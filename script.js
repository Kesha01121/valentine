let yesSize = 1;
let noClicks = 0;

const messages = [
    "Үнэхээр үү? 🥺",
    "Дахиад бодоод үзээч? 💔",
    "Гуйж байна... 🙏",
    "Гүй ээ, болохгүй ээ! 🙅‍♂️",
    "Би маш их бэлдсэн шүү дээ 😫",
    "Аминааа... ❤️"
];

const sadGifs = [
    "sad1.gif",
    "sad2.gif",
    "sad3.gif",
    "sad4.gif",
    "sad5.gif",
    "sad6.gif"
];

function createHeart() {
    const container = document.getElementById("hearts-container");
    if (!container) return;
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

function moveButtonAway() {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const gifImg = document.getElementById("valentine-gif");

    gifImg.src = sadGifs[noClicks % sadGifs.length];
    noBtn.innerText = messages[noClicks % messages.length];
    noClicks++;

    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    let randomX = Math.random() * (maxX - padding) + padding;
    let randomY = Math.random() * (maxY - padding) + padding;

    noBtn.style.left = `${Math.max(padding, Math.min(randomX, maxX))}px`;
    noBtn.style.top = `${Math.max(padding, Math.min(randomY, maxY))}px`;
    noBtn.style.transform = "none";

    yesSize += 0.15;
    yesBtn.style.transform = `scale(${yesSize})`;
}

function noClicked() {
    // Хэрэв утсан дээр эсвэл яаж ийгээд дарж чадвал
    moveButtonAway();
}

function yesClicked() {
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    const noBtn = document.getElementById("noBtn");
    if (noBtn) noBtn.remove();

    document.getElementById('main-content').innerHTML = `
        <img src="https://media.tenor.com/gU_Pb_769_UAAAAAi/peach-goma-peach-and-goma.gif" style="width:200px; border-radius:20px;">
        <h1 style="font-size: 2.5rem; color: #ff4d6d;">YAY!!! 💕💖</h1>
        <p style="font-size: 1.5rem;">Миний хөөрхөн Валентин Аминаа (KillerChick)<br>Чамдаа маш их хайртай шүү! 😍✨</p>
    `;
}

