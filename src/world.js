// world.js
import { checkCollision } from './utils.js';

export function updateWorld() {
    // 1. 更新子弹位置（可能遍历 world.bullets 并移动）
    // 2. 更新敌人位置（可能遍历 world.enemies 并移动）

    // 3. 碰撞检测：子弹 vs 敌人
    for (let i = world.bullets.length - 1; i >= 0; i--) {
        const bullet = world.bullets[i];
        for (let j = world.enemies.length - 1; j >= 0; j--) {
            const enemy = world.enemies[j];
            if (checkCollision(bullet, enemy)) {
                // 碰撞：移除子弹和敌人
                world.bullets.splice(i, 1);
                world.enemies.splice(j, 1);
                break; // 子弹已消失，跳出内层循环
            }
        }
    }
}