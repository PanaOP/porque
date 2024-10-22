document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enter-button');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainPage = document.getElementById('main-page');

    // Cuando se hace clic en el botón, ocultar la pantalla de bienvenida y mostrar la página principal
    enterButton.addEventListener('click', function() {
        welcomeScreen.style.display = 'none';
        mainPage.style.display = 'block';
    });
});
