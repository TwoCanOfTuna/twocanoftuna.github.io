function loadBackground() {
    const background = `
        <img class="bg_image" src="/background/background_image.jpg">
    `;
    document.getElementById('background').innerHTML = background;
}
loadBackground();