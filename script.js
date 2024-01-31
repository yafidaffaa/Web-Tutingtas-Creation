document.addEventListener('DOMContentLoaded', function () {
    const switchButton = document.getElementById('switchButton');

    switchButton.addEventListener('click', function () {
        switchBackground();
    });

    function switchBackground() {
        const video = document.querySelector('video');
        const currentSource = video.getAttribute('src');

        // Contoh: Toggle antara dua sumber video
        const newSource = currentSource === 'bg tutingtas.mp4' ? 'presentation.mp4' : 'bg tutingtas.mp4';
        video.setAttribute('src', newSource);
    }
});
