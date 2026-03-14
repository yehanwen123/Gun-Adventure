import { WORLD_WIDTH, WORLD_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_SPEED } from './config.js';
import { keys } from './input.js';
import { solids } from './world.js';

// 玩家对象
export const player = {
    x: WORLD_WIDTH / 2,
    y: WORLD_HEIGHT / 2,
    w: PLAYER_WIDTH,
    h: PLAYER_HEIGHT,
    speed: PLAYER_SPEED
};

// 矩形碰撞检测（工具函数，可考虑移到 utils，但这里简单使用）
function rectCollide(r1, r2) {
    return !(r2.x >= r1.x + r1.w || r2.x + r2.w <= r1.x ||
             r2.y >= r1.y + r1.h || r2.y + r2.h <= r1.y);
}

// 玩家移动（带碰撞检测）
export function movePlayer(dt) {
    let dx = 0, dy = 0;
    if (keys['w'] || keys['arrowup']) dy -= 1;
    if (keys['s'] || keys['arrowdown']) dy += 1;
    if (keys['a'] || keys['arrowleft']) dx -= 1;
    if (keys['d'] || keys['arrowright']) dx += 1;
    if (dx === 0 && dy === 0) return;

    // 归一化对角线
    if (dx && dy) {
        const len = Math.sqrt(dx*dx + dy*dy);
        dx /= len; dy /= len;
    }

    const moveX = dx * player.speed * dt;
    const moveY = dy * player.speed * dt;

    // X轴移动
    if (moveX) {
        let newX = player.x + moveX;
        newX = Math.max(player.w/2, Math.min(WORLD_WIDTH - player.w/2, newX));
        const newRect = { x: newX - player.w/2, y: player.y - player.h/2, w: player.w, h: player.h };
        for (let s of solids) {
            if (rectCollide(newRect, s)) {
                if (moveX > 0) newX = s.x - player.w/2 - 0.1;
                else newX = s.x + s.w + player.w/2 + 0.1;
                break;
            }
        }
        player.x = newX;
    }

    // Y轴移动
    if (moveY) {
        let newY = player.y + moveY;
        newY = Math.max(player.h/2, Math.min(WORLD_HEIGHT - player.h/2, newY));
        const newRect = { x: player.x - player.w/2, y: newY - player.h/2, w: player.w, h: player.h };
        for (let s of solids) {
            if (rectCollide(newRect, s)) {
                if (moveY > 0) newY = s.y - player.h/2 - 0.1;
                else newY = s.y + s.h + player.h/2 + 0.1;
                break;
            }
        }
        player.y = newY;
    }
}