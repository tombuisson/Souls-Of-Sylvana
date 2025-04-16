export function movingPlatform(x, y, width, height, speed, direction = "up") {
    onUpdate("platform", (p) => {
        if (p.direction === "up") {
            p.pos.y -= p.speed;
            if (p.pos.y + p.height < 0) {
                p.pos.y = height();
            }
        }
    });
}