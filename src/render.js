// render.js
import { world } from './world.js'; // 根据你的导出方式调整

export function draw(ctx) {
    // 清空画布、绘制玩家、子弹等（已有代码）

    // 绘制敌人
    ctx.fillStyle = 'red';
    world.enemies.forEach(enemy => {
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}