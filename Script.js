document.addEventListener("click", function (e) {
    createHeart(e.clientX, e.clientY);
    showLoveText(e.clientX, e.clientY);
});

function createHeart(x, y) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    const animationDuration = Math.random() * 2 + 2;
    heart.style.animation = `fall ${animationDuration}s linear, twinkle 1.5s infinite alternate`;

    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}

function showLoveText(x, y) {
    const loveText = document.createElement("div");
    loveText.innerText = getRandomLoveText();
    loveText.classList.add("love-message");
    
    loveText.style.left = `${x}px`;
    loveText.style.top = `${y}px`;
    
    document.body.appendChild(loveText);

    setTimeout(() => {
        loveText.style.opacity = "0";
        loveText.style.transform = "translateY(-30px)";
        setTimeout(() => {
            loveText.remove();
        }, 1500);
    }, 1000);
}

function getRandomLoveText() {
    const loveTexts = [
        "Kamu Indah seperti bulan dan bintang✨",
        "Kamu adalah cerita terindah dalam hidupku 📖❤️",
        "Hiu Yang Sangat Suka Sekali Dengan Matcha☘️",
        "Kamu Adalah Anak Yang Pintar📖📚",
        "Kamu Seperti Anak Kecil Yang Lucu Dan Menggemaskan 🤗",
        "Tawamu itu kayak musik favorit, bikin nagih dan susah dilupain 🎵",
        "Kehadiranmu Selalu Membawa Dampak Positive Dan Membawa keceriaan💃",
        "Bocah Yang Selalu Bawel Kalau Dikasih Tau (Nyenyenye)😏",
        "Bocah Yang Sering Ngambekan🦈",
        "Anak perempuan Yang Paling Hebat💪",
        "Kamu Adalah Orang Special Dan Terpenting di hidupku🌹",
        "Kadang Ngeselin Kadang Ngangenin💫"
    ];
    return loveTexts[Math.floor(Math.random() * loveTexts.length)];
}

document.addEventListener("mousemove", function () {
  let audio = document.getElementById("musik");
  audio.play();
}, { once: true }); // Agar hanya dijalankan sekali

function createFallingElement() {
    const element = document.createElement("div");
    
    // Pilih acak antara hati ❤️ atau hati berkilau 💖
    const symbols = ["❤️", "💖"];
    element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    
    element.classList.add("falling-element");
    document.body.appendChild(element);

    let startPosX = Math.random() * window.innerWidth; // Posisi acak di atas layar
    element.style.left = `${startPosX}px`;
    element.style.top = `-10px`; // Mulai dari atas layar

    let duration = Math.random() * 5 + 3; // Waktu jatuh antara 3-8 detik
    element.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        element.remove();
    }, duration * 1000);
}

// Buat elemen jatuh terus-menerus setiap 300ms
setInterval(createFallingElement, 300);