document.getElementById('yes-btn').addEventListener('click', function() {
    window.location.href = 'thanks.html';
});

const noBtn = document.getElementById('no-btn');

function moveNoBtn() {
    const container = document.querySelector('.container');
    const btnRect = noBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', moveNoBtn);