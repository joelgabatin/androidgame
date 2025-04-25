let score = 0;
const scoreDisplay = document.getElementById("score");
const tapButton = document.getElementById("tapButton");
const installBtn = document.getElementById("installButton");

tapButton.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

// PWA Install Button Logic
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;

  installBtn.addEventListener('click', () => {
    installBtn.hidden = true;
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  });
});
