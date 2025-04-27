export function playMusic() {
    let music1;

    // Démarrer la musique
    music1 = play("lvl1Music", { volume: 0.8, loop: true });

    // Plus tard...
    music1.paused = false; // Mettre en pause
    music1.play();  // Reprendre (pas besoin de re-jouer avec play())
}