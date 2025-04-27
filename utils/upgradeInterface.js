export function upgradeInterface() {
    let isUiVisible = false;
    let plankBackground = null;
    let upgradeTitle;

    onKeyPress("tab", () => {
        if (isUiVisible) {
            destroy(plankBackground);
            destroy(upgradeTitle);
            plankBackground = null;
        } else {
            let camX = camPos().x;

            plankBackground = add([
                sprite("plank"),
                area(),
                anchor("center"),
                pos(camX, center().y - 180),
                scale(1.2),
                z(301),
            ]);
            upgradeTitle = add([
                text("U p g r a d e s  S h o p", {
                    font: "Round",
                    size: "34",
                }),
                color(BLACK),
                z(301),
                anchor("center"),
                pos(camX, center().y -480),
            ]);

            const skillTree = {
                skills: {
                    doubleJump: {
                        id: "skill1",
                        name: "doubleJump",
                        cost: 20,
                        unlocked: false,
                        require: []
                    },
                    dash: {
                        id: "skill2",
                        name: "dash",
                        cost: 20,
                        unlocked: false,
                        require: ["skill1"]
                    },
                    moreSpeed: {
                        id: "skill3",
                        name: "moreSpeed",
                        cost: 20,
                        unlocked: false,
                        require: ["skill1", "skill2"]
                    }
                },
                orbs: 0
            };

            function canUnlockSkill(skillId) {
                const skill = skillTree.skills[skillId];

                if(skill.unlocked) return false;

                if(skillTree.orbs < skill.cost) return false;

                for(const reqId in skills.require) {
                    if(!skillTree.skills[reqId].unlocked)
                        return false;
                }
            }
            

            onUpdate(() => {
                if(plankBackground) {
                    plankBackground.pos.x = camPos().x;
                    upgradeTitle.pos.x = camPos().x;
            }
            });
        }
        isUiVisible = !isUiVisible;
    });
}