export function initParallax() {
    const IMAGE_WIDTH = 576;
    const IMAGE_HEIGHT = 766;
    const Y_OFFSET = -183; // Ajustez cette valeur pour déplacer plus ou moins vers le haut

    // Calcul du scale pour couvrir l'écran
    const scaleX = width() / IMAGE_WIDTH;
    const scaleY = height() / IMAGE_HEIGHT;
    const maxScale = Math.max(scaleX, scaleY);
    
    const layers = [
        {
            speedFactor: 0.04,
            parts: [
                add([
                    sprite("bg1"),
                    pos(0, Y_OFFSET), // Ajout du décalage en Y
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
                add([
                    sprite("bg1"),
                    pos(IMAGE_WIDTH * maxScale, Y_OFFSET), // Ajout du décalage en Y
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
                add([
                    sprite("bg1"),
                    pos(IMAGE_WIDTH * maxScale * 2, Y_OFFSET), // Ajout du décalage en Y
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
            ],
        },
        // Répétez pour les autres couches en ajoutant Y_OFFSET
        {
            speedFactor: 0.02,
            parts: [
                add([
                    sprite("bg2"),
                    pos(0, Y_OFFSET),
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
                add([
                    sprite("bg2"),
                    pos(IMAGE_WIDTH * maxScale, Y_OFFSET),
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
                add([
                    sprite("bg2"),
                    pos(IMAGE_WIDTH * maxScale * 2, Y_OFFSET),
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
            ],
        },
        {
            speedFactor: 0.03,
            parts: [
                add([
                    sprite("bg3"),
                    pos(0, Y_OFFSET),
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
                add([
                    sprite("bg3"),
                    pos(IMAGE_WIDTH * maxScale, Y_OFFSET),
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
                add([
                    sprite("bg3"),
                    pos(IMAGE_WIDTH * maxScale * 2, Y_OFFSET),
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
            ],
        },
        {
            speedFactor: 0.08,
            parts: [
                add([
                    sprite("bg4"),
                    pos(0, Y_OFFSET),
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
                add([
                    sprite("bg4"),
                    pos(IMAGE_WIDTH * maxScale, Y_OFFSET),
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
                add([
                    sprite("bg4"),
                    pos(IMAGE_WIDTH * maxScale * 2, Y_OFFSET),
                    scale(maxScale),
                    z(-1),
                    "parallaxLayer"
                ]),
            ],
        },
    ];

    // Le reste du code reste inchangé
    onUpdate(() => {
        const camX = camPos().x;

        for (const layer of layers) {
            const layerOffsetX = -camX * layer.speedFactor;

            for (let i = 0; i < layer.parts.length; i++) {
                const part = layer.parts[i];
                part.pos.x = layerOffsetX + (i * IMAGE_WIDTH * maxScale);

                if (part.pos.x + IMAGE_WIDTH * maxScale < camX - width()) {
                    part.pos.x += IMAGE_WIDTH * maxScale * layer.parts.length;
                }
                if (part.pos.x > camX + width()) {
                    part.pos.x -= IMAGE_WIDTH * maxScale * layer.parts.length;
                }
            }
        }
    });
}