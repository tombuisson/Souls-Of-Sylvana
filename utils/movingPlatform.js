// utils/movingPlatform.js
export const movingPlatforms = {
    config: {
        width: 100,
        height: 40,
        speed: 15000,
        spawnRate: 3,
        lastSpawn: 0,
        spacing: 200, // Space between platforms
    },
    platforms: [],

    create() {
        // First platform
        const platform1 = add([
            sprite("platform", {
                width: this.config.width,
                height: this.config.height
            }),
            pos(2370, 600),
            area(),
            body({ isStatic: true }),
            z(300),
            "moving-platform1",
            {
                moveSpeed: this.config.speed,
            },
        ]);
        
        // Second platform right next to the first one
        const platform2 = add([
            sprite("platform", {
                width: this.config.width,
                height: this.config.height
            }),
            pos(2350 + this.config.width + this.config.spacing, 800), // Positioned to the right
            area(),
            body({ isStatic: true }),
            z(300),
            "moving-platform2",
            {
                moveSpeed: this.config.speed,
            },
        ]);
        
        this.platforms.push(platform1, platform2);
        this.config.lastSpawn = time();
        return [platform1, platform2]; // Return both platforms
    },

    update() {
        this.platforms.forEach((platform, index) => {
            platform.move(0, -platform.moveSpeed * dt());
            
            if (platform.pos.y + platform.height < -170) {
                destroy(platform);
                this.platforms.splice(index, 1);
            }
        });
        
        if (time() - this.config.lastSpawn > this.config.spawnRate) {
            this.create();
        }
    }
};