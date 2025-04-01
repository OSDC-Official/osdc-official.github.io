// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

const messages = [
    "Join us on this exciting journey. Stay tuned for updates!",
    "Exciting things are on the horizon. Don't miss out!",
    "We're building something amazing. Be the first to know!",
    "Stay connected for the big reveal. It's worth the wait!"
];
let index = 0;
const dynamicText = document.getElementById('dynamic-text');

function typeEffect(text, callback) {
    let i = 0;
    dynamicText.textContent = '';
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            dynamicText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            if (callback) callback();
        }
    }, 100);
}

function eraseEffect(callback) {
    const text = dynamicText.textContent;
    let i = text.length;
    const erasingInterval = setInterval(() => {
        if (i > 0) {
            dynamicText.textContent = text.substring(0, i - 1);
            i--;
        } else {
            clearInterval(erasingInterval);
            if (callback) callback();
        }
    }, 50);
}

function cycleMessages() {
    eraseEffect(() => {
        index = (index + 1) % messages.length;
        typeEffect(messages[index], () => {
            setTimeout(cycleMessages, 3000);
        });
    });
}

typeEffect(messages[index], () => {
    setTimeout(cycleMessages, 3000);
});

// Countdown Timer
const countDownDate = new Date("Jul 1, 2025 00:00:00").getTime();

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "LAUNCHED!";
    }
}, 1000);

(function () {
    const waitlistButton = document.getElementById('waitlistButton');
    const modalOverlay = document.getElementById('modalOverlay');
    const formIframe = document.getElementById('formIframe');
    const closeButton = document.getElementById('closeButton');

    // Open modal
    waitlistButton.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });

    // Close modal handlers
    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    closeButton.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Reset iframe on close
    modalOverlay.addEventListener('transitionend', () => {
        if (!modalOverlay.classList.contains('active')) {
            formIframe.src = '';
        }
    });
})();