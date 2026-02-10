function yesClicked() {
    document.body.innerHTML = `
        <div style="text-align:center; margin-top:100px;">
            <h1>YAY!!! 💕💖</h1>
            <p>хөөрхөн бүсгүйд зөндөө их хайртай 😍</p>
        </div>
    `;
}

const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distance = Math.hypot(
        e.clientX - btnCenterX,
        e.clientY - btnCenterY
    );

    // Distance threshold (how close mouse can get)
    if (distance < 120) {
        moveButtonAway(e);
    }
});

function moveButtonAway(mouseEvent) {
    const padding = 20;

    // Дэлгэцний хэмжээний дотор байх байрлал сонгох
    let maxX = window.innerWidth - noBtn.offsetWidth - padding;
    let maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    // Дэлгэцний хэмжээнээс гарахгүй байх
    maxX = Math.max(padding, maxX);
    maxY = Math.max(padding, maxY);

    let x = Math.random() * (maxX - padding) + padding;
    let y = Math.random() * (maxY - padding) + padding;

    // transform байхгүй болгохыг нь шалгах
    noBtn.style.transform = "none";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function noClicked() {
    noBtn.style.display = "none";
}
