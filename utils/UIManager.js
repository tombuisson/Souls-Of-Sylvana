class UIManager {

    displayLivesCount(player) {
        this.livesCountUI = add([
            text("", {
                font: "Round",
                size: 25,
            }),
            fixed(),
            pos(50, 10)
        ])

        this.livesCountUI.add([
            sprite("heart-icon"),
            pos(-60, -20),
            scale(0.5),
            fixed()
        ])
    }

    displayCoinCount(player) {
        this.coinCountUI = add([
            text("", {
                font: "Round",
                size: 25
            }),
            {
                fullCoinCount: 0, // Initialize to 0
                updateCoinTotal: function() {
                    this.fullCoinCount = get("coin", { recursive: true }).length;
                }
            },
            fixed(),
            pos(50, 50)
        ])
    
        // Update coin total after level is fully loaded
        wait(0.1, () => {
            this.coinCountUI.updateCoinTotal();
        });
    
        this.coinCountUI.add([
            sprite("coin-icon"),
            pos(-43, -5),
            scale(1.7),
            fixed()
        ])
    }

    // displayEnergyCount(player) {
    //     this.energyCountUI = add([
    //         text("", {
    //             font: "Round",
    //             size: 25
    //         }),
    //         {
    //             energyCount: 0, // Initialize to 0
    //             updateEnergyTotal: function() {
    //             }
    //         },
    //         fixed(),
    //         pos(50, 50)
    //     ])
    
    //     // Update coin total after level is fully loaded
    //     wait(0.1, () => {
    //         this.coinCountUI.updateCoinTotal();
    //     });
    
    //     this.coinCountUI.add([
    //         sprite("coin-icon"),
    //         pos(-43, -5),
    //         scale(1.7),
    //         fixed()
    //     ])
    // }

    displayBlinkingUIMessage(content, position) {
        const message = add([
            text(content, {
                size: 24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"])
        ])
        message.onStateEnter("flash-up", async () => {
            await tween(
                message.opacity,
                0,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-down")
        })
        message.onStateEnter("flash-down", async () => {
            await tween(
                message.opacity,
                1,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-up")
        })
    }

    displayMainMenu() {
        add([
            sprite("forest-background"),
            scale(5.1)
        ]),
        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y - 100),
            scale(8)
        ])

        this.displayBlinkingUIMessage(
            "Press [ Enter ] to Start Game", 
            vec2(center().x, center().y + 100)
        )

        onKeyPress("enter", () => {
            // play("confirm-ui", { speed: 1.5 })
            go("controls")
        })
    }

    // affiche le menu de controles
    displayControlsMenu() {
        add([
            sprite("forest-background"),
            scale(5.1)
        ])
        add([
            text("controls", { font: "Round", size: 50 }),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200),
        ])

        const controlPrompts = add([
            pos(center().x + 30, center().y)
        ])
        controlPrompts.add([
            sprite("up"),
            pos(0, -80)
        ])
        controlPrompts.add([sprite("down")])
        controlPrompts.add([sprite("left"), pos(-80, 0)])
        controlPrompts.add([sprite("right"), pos(80, 0)])
        controlPrompts.add([sprite("space"), pos(-200, 0)])

        controlPrompts.add([
            text("jump", { font: "Round", size: 20 }),
            pos(-178, 100)
        ])
        controlPrompts.add([
            text("Movements", { font: "Round", size: 20 }),
            pos(-10, 100)
        ])

        this.displayBlinkingUIMessage(
            "Press [ Enter ] to Start Game", 
            vec2(center().x, center().y + 180)
        )

        onKeyPress("enter", () => {
            // play("confirm-ui", { speed: 1.5 })
            go("1")
        })
    }

    addDarkBg() {
        // add([rect(230, 120), color(0,0,0), fixed()])
    }
}
export const uiManager = new UIManager()