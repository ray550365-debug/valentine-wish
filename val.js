const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const askSection = document.getElementById('ask-section');
const responseSection = document.getElementById('response-section');

// When she clicks YES
yesBtn.addEventListener('click', () => {
    askSection.classList.add('hidden');
    responseSection.classList.remove('hidden');
});

// When she tries to click NO (it runs away!)
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
