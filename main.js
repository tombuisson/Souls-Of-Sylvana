import kaplay from "https://unpkg.com/kaplay@3001/dist/kaplay.mjs";
import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
import { Level } from "./utils/Level.js"
import { Player } from "./entities/player.js"
import { attachCamera } from "./utils/camera.js"
import { level1Config } from "./content/level1/config.js"
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"
import { level2Config } from "./content/level2/config.js"
import { level2Layout, level2Mappings } from "./content/level2/level2Layout.js"
import { level3Config } from "./content/level3/config.js"
import { level3Layout, level3Mappings } from "./content/level3/level3Layout.js"
import { initParallax } from "./utils/parallax.js"
import { movingPlatform } from "./utils/movingPlatform.js"

kaboom({
    width: 1280,
    height: 766,
    letterbox: true,
    debug: false
});

load.assets();
load.fonts();
// load.sounds()
console.log("Sprites chargés:", load);
console.log(getSprite("grass-oneway-tileset"));

const scenes = {
    menu: () => {
        uiManager.displayMainMenu()
    },
    controls: () => {
        uiManager.displayControlsMenu()
    },
    1: () => {     
        setGravity(1400)
        console.log("Chargement du niveau 1...");
        const level1 = new Level();
        level1.drawMapLayout(level1Layout, level1Mappings);
    
        const player = new Player(
            level1Config.playerStartPosX,
            level1Config.playerStartPosY,
            level1Config.playerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false,
            16
        );
        
        movingPlatform(100, 500, 200, 40, 100);
        movingPlatform(400, 300, 200, 40, 150);
    
        player.enablePassthrough()
        player.enableCoinPickup()
        player.displayInteractMsg(uiManager.coinCountUI)
        player.update()
    
        attachCamera(player.gameObj, 0, 200)
    
        level1.drawWaves("water", "wave")
    
        uiManager.addDarkBg()
    
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)
    
        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)
                
        onLoad(() => {
            initParallax();
        });
    },
    2: () => {
        setGravity(1400)

        console.log("Chargement du niveau 2...");
        const level2 = new Level();
        level2.drawBackground("castle-background");
        console.log("Dessin du background terminé.");
        level2.drawMapLayout(level2Layout, level2Mappings);
        console.log("Dessin de la map terminé.");

        const player = new Player(
            level2Config.playerStartPosX,
            level2Config.playerStartPosY,
            level2Config.playerSpeed,
            level2Config.jumpForce,
            level2Config.nbLives,
            2,
            false,
            14
        )
        player.enablePassthrough()
        player.enableCoinPickup()
        player.update()

        attachCamera(player.gameObj, 0, 200)

        level2.drawWaves("lava", "wave")

        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)        
    },
    3: () => {
        setGravity(1400)

        console.log("Chargement du niveau 3...");
        const level3 = new Level();
        level3.drawBackground("Sky-Background-0");
        level3.drawBackground("Sky-Background-1");
        level3.drawBackground("Sky-Background-2");
        console.log("Dessin du background terminé.");
        level3.drawMapLayout(level3Layout, level3Mappings);
        console.log("Dessin de la map terminé.");

        const player = new Player(
            level3Config.playerStartPosX,
            level3Config.playerStartPosY,
            level3Config.playerSpeed,
            level3Config.jumpForce,
            level3Config.nbLives,
            3,
            true
        )
        player.enablePassthrough()
        player.enableCoinPickup()
        player.update()

        attachCamera(player.gameObj, 0, 200)

        level3.drawWaves("clouds", "wave")

        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)
    },
    gameover: () => {
    
    },
    end: () => {
    
    }
}

for (const key in scenes) {
    scene(key, scenes[key])
}

go("menu");