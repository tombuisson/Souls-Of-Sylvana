export class Player {
    heightDelta = 0
    isMoving = false
    isRespawning = false
    coyoteLapse = 0.1
    coin = 0
    heart = 0

    constructor(
        posX,
        posY,
        speed,
        jumpForce,
        nbLives,
        currentLevelScene,
        isInFinalLevel,
        totalCoins,
    ) {
        this.isInFinalLevel = isInFinalLevel
        this.currentLevelScene = currentLevelScene
        this.initialX = posX
        this.initialY = posY
        this.makePlayer()
        this.setPlayerControls()
        this.speed = speed
        this.jumpForce = jumpForce
        this.lives = nbLives
        this.previousHeight = this.gameObj.pos.y
        this.totalCoins = totalCoins
    }

    makePlayer() {
        this.gameObj = add([
            sprite("player", { anim: "idle" }),
            area({ shape: new Rect(vec2(0, 3), 8, 8) }),
            anchor("center"),
            pos(this.initialX, this.initialY),
            scale(4),
            z(200),
            body(),
            "player"
        ])
    }

    enablePassthrough() {
        this.gameObj.onBeforePhysicsResolve((collision) => {
            if (collision.target.is("passthrough") | collision.target.is("platform") && this.gameObj.isJumping()) {
                collision.preventResolution()
            }

            if (collision.target.is("passthrough") | collision.target.is("platform") && isKeyDown("down")) {
                collision.preventResolution()
            }
        })
    }

    enableCoinPickup() {
        this.gameObj.onCollide("coin", (coin) => {
            this.coin++
            destroy(coin)
            // play("coin" "./Path/To/Coin/Sound")
        })
    }

    setPlayerControls() {
        onKeyDown("left", () => {
            if (this.gameObj.curAnim() !== "run") this.gameObj.play("run")
                this.gameObj.flipX = true
            if (!this.isRespawning) this.gameObj.move(-this.speed, 0)
            this.isMoving = true
        })
        onKeyDown("right", () => {
            if (this.gameObj.curAnim() !== "run") this.gameObj.play("run")
            this.gameObj.flipX = false
            if (!this.isRespawning) this.gameObj.move(this.speed, 0)
            this.isMoving = true
        })

        onKeyDown("space", () => {
            // if (!this.gameObj.isGrounded() && this.hasJumpedOnce) return

            // if (time() - this.timeSinceLastGrounded > this.coyoteLapse) return

            this.gameObj.jump(this.jumpForce)
            // play("jump" "./Chemin/vers/le/son/de/jump")
            this.hasJumpedOnce = true
        })

        onKeyRelease(() => {
            if (isKeyReleased("right") || isKeyReleased("left")) {
                this.gameObj.play("idle")
                this.isMoving = false
            }
        })
    }

    respawnPlayer() {
        if (this.lives > 0) {
            this.lives--
            this.gameObj.pos = vec2(this.initialX, this.initialY)
            this.isRespawning = true
            setTimeout(() => this.isRespawning = false, 500)
            return
        }

        go("gameover")
    }

    update() {
        onUpdate(() => {
            if (this.gameObj.isGrounded()) {
                this.hasJumpedOnce = false
                this.timeSinceLastGrounded = time()
            }

            this.heightDelta = this.previousHeight - this.gameObj.pos.y
            this.previousHeight = this.gameObj.pos.y

            if (this.gameObj.pos.y > 1000) {
                //play("hit", "./chemin_vers_le_son")
                this.respawnPlayer()
            }

            if (this.iMoving && this.gameObj.curAnim() !== "idle") {
                this.gameObj.play("idle")
            }

            if (!this.gameObj.isGrounded() && 
                this.heightDelta > 0 &&
                this.gameObj.curAnim() !== "jump-up"
            ) {
                this.gameObj.play("jump-up")
            }

            if (!this.gameObj.isGrounded() &&
                this.heightDelta < 0 &&
                this.gameObj.curAnim() !== "jump-down"
            ) {
                this.gameObj.play("jump-down")
            }
        })
    }

    updateLives(livesCountUI) {
        onUpdate(() => {
            livesCountUI.text = this.lives
        })
    }

    updateCoinCount(coinCountUI) {
        onUpdate(() => {
            coinCountUI.text = `${this.coin} / ${coinCountUI.fullCoinCount}`
        })
    }

    displayInteractMsg(coinCountUI) {
        this.gameObj.onCollide("door", (door) => {
            
            if (this.coin >= this.totalCoins) {
                go(this.isInFinalLevel ? "end" : this.currentLevelScene + 1);
            } else {
                console.log(`Player coins: ${this.coin}, Required coins: ${this.totalCoins}`);
                const msg = add([
                    text("P a s  a s s e z  d e  p i e c e s  !", { 
                        size: 24, 
                        font: "Round"
                    }),
                    pos(this.gameObj.pos.add(vec2(0, -40))),
                    anchor("center"),
                    opacity(1),
                    z(500),
                    lifespan(1)
                ])
            }
        });
    }
}