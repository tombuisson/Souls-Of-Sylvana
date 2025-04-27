export const load = {
    fonts: () => {
        loadFont("Round", "./assets/Round9x13.ttf");
    },
    assets: () => {
        loadSprite("forest-background", "./assets/Forest_Background_0.png");
        loadSprite("logo", "./assets/logo.png");
        loadSprite("coin-icon", "./assets/Coins_Ui.png");
        loadSprite("heart-icon", "./assets/heart.png");
        loadSprite("up", "./assets/Arrow_Up_Key_Dark.png");
        loadSprite("down", "./assets/Arrow_Down_Key_Dark.png");
        loadSprite("left", "./assets/Arrow_Left_Key_Dark.png");
        loadSprite("right", "./assets/Arrow_Right_Key_Dark.png");
        loadSprite("space", "./assets/Space_Key_Dark.png");
        loadSprite("bridge", "./assets/Bridge.png");
        loadSprite("castle-background", "./assets/Castle_Background_0.png")
        loadSprite("Sky-Background-0", "./assets/Sky_Background_0.png")
        loadSprite("Sky-Background-1", "./assets/Sky_Background_1.png")
        loadSprite("Sky-Background-2", "./assets/Sky_Background_2.png")
        loadSprite("bg1", "./backGrounds/TheOne/1.png")
        loadSprite("bg2", "./backGrounds/TheOne/2.png")
        loadSprite("bg3", "./backGrounds/TheOne/3.png")
        loadSprite("bg4", "./backGrounds/TheOne/4.png")
        loadSprite("feather", "./assets/feather.png")
        loadSprite("pancarte", "./assets/pancarte.png")
        loadSprite("arrow-pancarte", "./assets/arrow-pancarte.png")
        loadSprite("tab", "./assets/keys/Tab_Key_Dark.png")
        loadSprite("catLaughing", "./assets/catLaughing.png")
        loadSprite("plank", "./assets/plank2.png")
        loadSprite("doubleJump-icon", "./assets/double-jump.png")
        loadSound("lvl1Music", "./assets/lvl1Music.mp3")

        loadSprite("platform", "./assets/Platform.png")

        // loadSprite("energy", "./assets/energy-icon.png"), {
        //     sliceY: 4,
        //     anims
        // }

        loadSprite("grass-tileset", "./assets/Grass_Tileset.png",{ 
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
            },
        });

        loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
            },
        })

        loadSprite("brick-tileset", "./assets/Brick_Tileset.png",{ 
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
            },
        });

        loadSprite("brick-oneway-tileset", "./assets/Brick_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
            },
        })

        loadSprite("rock-tileset", "./assets/Grass_Rock_Tileset.png",{ 
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
            },
        });

        loadSprite("rock-oneway-tileset", "./assets/Grass_Rock_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
            },
        })

        loadSprite("water", "./assets/Water.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
            },
        })
        loadSprite("lava", "./assets/Lava.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
            },
        })
        loadSprite("clouds", "./assets/Clouds.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
            },
        })
        loadSprite("player", "./assets/Player.png", {
            sliceX: 4,
            sliceY: 6,
            anims: {
                idle: {
                    from: 0,
                    to: 3,
                    loop: true,
                },
                run: {
                    from: 4,
                    to: 7,
                    loop: true,
                },
                "jump-up": 8,
                "jump-down": 9, 
            }
        })
        loadSprite("coin", "./assets/coins.png", {
            sliceX: 9,
            anims: {
                rounds: {
                    from: 0,
                    to: 8,
                    loop: true,
                },
            }
        })
        loadSprite("door", "./assets/door.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                opening: {
                    from: 0,
                    to: 11,
                    loop: false,
                },
            }
        })
    },

    // sounds: () => {
    //     loadSound("confirm-ui", "./Chemin/Vers/le/son.wav.wav");
    //     loadSound("jump", "./Chemin/Vers/le/son.wav")
    //     loadSound("hit", "./Chemin/Vers/le/son.wav")
    //     loadSound("coin", "./Chemin/Vers/le/son.wav")    
    // }
};
