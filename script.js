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

// 1. Хөвж буй зүрхнүүд үүсгэх
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("hearts-container").appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

// 2. "No" товчлуур зугтах + "Yes" томрох
function moveButtonAway() {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    // 1. Эхлээд текстийг нь сольж, товчлуурын хэмжээг шинэчлэгдэх боломж олгоно
    noBtn.innerText = messages[noClicks % messages.length];
    noClicks++;

    // 2. Аюулгүйн зай (pixel)
    const padding = 20; 

    // 3. Товчлуурын одоогийн өргөн ба өндрийг авна
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // 4. Дэлгэцийн боломжит дээд хязгаарыг тооцоолно
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // 5. Санамсаргүй байрлал сонгох (Дэлгэцээс гарахгүй байх баталгаа)
    let randomX = Math.random() * (maxX - padding) + padding;
    let randomY = Math.random() * (maxY - padding) + padding;

    // Сөрөг утга гарахаас сэргийлнэ (жижиг дэлгэц дээр)
    randomX = Math.max(padding, Math.min(randomX, maxX));
    randomY = Math.max(padding, Math.min(randomY, maxY));

    // 6. Байрлалыг оноож, CSS transform-ыг арилгана
    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.transform = "none"; // ЭНЭ МАШ ЧУХАЛ: CSS дээрх translate-ийг арилгаж байна
    noBtn.style.margin = "0"; // Илүү зайг арилгана

    // 7. "Yes" товчийг томруулна
    yesSize += 0.15;
    yesBtn.style.transform = `scale(${yesSize})`;
}

// 3. "Yes" дарах үеийн эффект
function yesClicked() {
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    // "No" товчлуурыг дэлгэцнээс устгах (ЭНЭ ХЭСГИЙГ НЭМЭЭРЭЙ)
    const noBtn = document.getElementById("noBtn");
    if (noBtn) noBtn.remove();

    document.getElementById('main-content').innerHTML = `
        <img src="https://media.tenor.com/gU_Pb_769_UAAAAAi/peach-goma-peach-and-goma.gif" style="width:200px; border-radius:20px;">
        <h1 style="font-size: 2.5rem; color: #ff4d6d;">YAY!!! 💕💖</h1>
        <p style="font-size: 1.5rem;">Миний хөөрхөн Валентин Аминаа (KillerChick)<br>Чамдаа маш их хайртай шүү! 😍✨</p>
    `;
}
