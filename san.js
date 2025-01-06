document.addEventListener('DOMContentLoaded', () => {
    const side = document.querySelector('.side'); 
    const links = document.querySelector('.links');
    const blur = document.querySelector('.blur');
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        side.classList.add('active');
        links.classList.add('active');
    });
    blur.addEventListener('click', () => {
        side.classList.remove('active');
        links.classList.remove('active');
    });
});
