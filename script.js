let yesSize = 1;
let noClicks = 0;

const messages = [
    "Үнэхээр үү? 🥺",
    "Дахиад бодоод үзээч? 💔",
    "Гуйж байна... 🙏",
    "Гүй ээ, болохгүй ээ! 🙅‍♂️",
    "жөндөө бэлдсэн жүү дээ 😫",
    "Аминааа... ❤️",
    "ий ий ийннн 😭",
    "хайрраоаоаоа 🥹"
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
    // 1. Өнгөт цаас цацах
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ff8fa3']
    });

    // 2. "No" товчлуурыг устгах
    const noBtn = document.getElementById("noBtn");
    if (noBtn) noBtn.remove();

    // 3. Үндсэн картыг шинэчлэх
    document.getElementById('main-content').innerHTML = `
        <div class="yes-screen">
            <!-- Энд өөрийн татаж авсан happy.gif зургийг тавина -->
            <img src="happy.gif" style="width:200px; border-radius:20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
            <h1 style="font-size: 2.5rem; color: #ff4d6d; margin-top: 20px;">YAY!!! 💕💖</h1>
            <h2 style="color: #ff4d6d; margin-bottom: 10px;">Аминаа (KillerChick)</h2>
            <p style="font-size: 1.3rem; color: #555; line-height: 1.6;">
                Миний хөөрхөн Валентин болсонд баярлалаа! <br> 
                Чамдаа хязгааргүй их хайртай шүү 😍✨
            </p>
            <div style="font-size: 50px; margin-top: 15px; animation: bounce 2s infinite;">🌹💑✨</div>
        </div>
    `;
}



