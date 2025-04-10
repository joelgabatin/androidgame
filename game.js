let score = 0;
const scoreDisplay = document.getElementById("score");
const tapButton = document.getElementById("tapButton");

tapButton.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Show your own install button
  const installBtn = document.createElement('button');
  installBtn.textContent = 'Install Game';
  document.body.appendChild(installBtn);

  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});
