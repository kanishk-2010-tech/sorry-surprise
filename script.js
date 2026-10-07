const heartsContainer =
    document.getElementById("hearts-container");


// ❤️ Floating Hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML =
        Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 12 + "px";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 500);


// 💌 Open Secret Message

function openMessage() {

    const secret =
        document.getElementById("secret");

    secret.classList.add("show");

    heartExplosion();

    setTimeout(() => {

        secret.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);
}


// ❤️ Heart Explosion

function heartExplosion() {

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            Math.random() > .5
                ? "❤️"
                : "🌷";

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 280 + 80;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1.2)`,

                    opacity: 0
                }
            ],
            {
                duration: 1300,
                easing: "cubic-bezier(.17,.67,.35,1)"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1300);
    }
}