function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

function hideSections() {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
}

function playMusic() {
    document.getElementById("bgMusic").play();
}

function openGift() {
    document.getElementById("giftBox").src = "https://img.freepik.com/free-psd/delicious-decorated-birthday-cake_23-2150628992.jpg?t=st=1742023887~exp=1742027487~hmac=220c5d614fb411c3c5ae878fb9df381361621471132712b0cf515accad7b3687&w=900";
    document.getElementById("giftMessage").style.display = "block";
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

        setTimeout(() => confetti.remove(), 5000);
    }
}
setInterval(createConfetti, 500);