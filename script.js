function showMessage() {
    document.querySelector('.hidden-message').style.display = 'block';
}

function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    document.getElementById('roses-container').appendChild(rose);
    
    let leftPosition = Math.random() * window.innerWidth;
    let animationDuration = Math.random() * 5 + 3; // 3s to 8s fall time
    let size = Math.random() * 20 + 50; // Random sizes (50px to 70px)
    
    rose.style.left = leftPosition + 'px';
    rose.style.animationDuration = animationDuration + 's';
    rose.style.width = size + 'px';

    setTimeout(() => {
        rose.remove();
    }, animationDuration * 1000);
}

// Create a new rose every 400ms
setInterval(createRose, 400);

