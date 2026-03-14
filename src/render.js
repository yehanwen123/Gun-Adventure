import { VIEW_WIDTH, VIEW_HEIGHT, WORLD_WIDTH, WORLD_HEIGHT, MAP_SIZE } from './config.js';
import { camera } from './camera.js';
import { player } from './player.js';
import { solids, decorations } from './world.js';
import { mouse } from './input.js';

let ctx; // 将在初始化时设置
let floorImage = new Image();
floorImage.src = 'assets/dungeon_floor.png'; // 背景纹理

export function initRenderer(canvasContext) {
    ctx = canvasContext;
}

// 绘制世界
export function drawWorld() {
    // 世界外区域为黑色
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, VIEW_WIDTH, VIEW_HEIGHT);

    // 世界可见矩形
    const worldLeft = Math.max(0, camera.x);
    const worldRight = Math.min(WORLD_WIDTH, camera.x + VIEW_WIDTH);
    const worldTop = Math.max(0, camera.y);
    const worldBottom = Math.min(WORLD_HEIGHT, camera.y + VIEW_HEIGHT);
    if (worldLeft >= worldRight || worldTop >= worldBottom) return;

    const screenLeft = worldLeft - camera.x;
    const screenTop = worldTop - camera.y;
    const screenW = worldRight - worldLeft;
    const screenH = worldBottom - worldTop;

    ctx.save();
    ctx.beginPath();
    ctx.rect(screenLeft, screenTop, screenW, screenH);
    ctx.clip();

    // 绘制背景（平铺图片或纯色）
    if (floorImage.complete && floorImage.naturalWidth > 0) {
        const pattern = ctx.createPattern(floorImage, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(screenLeft, screenTop, screenW, screenH);
    } else {
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(screenLeft, screenTop, screenW, screenH);
    }

    // 绘制固体（墙壁）
    ctx.fillStyle = '#8b5e3c';
    solids.forEach(s => {
        const sx = s.x - camera.x;
        const sy = s.y - camera.y;
        ctx.fillRect(sx, sy, s.w, s.h);
    });

    // 绘制装饰物
    decorations.forEach(d => {
        const sx = d.x - camera.x;
        const sy = d.y - camera.y;
        ctx.fillStyle = d.color;
        ctx.fillRect(sx, sy, d.w, d.h);
    });

    // 绘制玩家
    const px = player.x - camera.x - player.w/2;
    const py = player.y - camera.y - player.h/2;
    ctx.fillStyle = '#4a90e2';
    ctx.fillRect(px, py, player.w, player.h);

    ctx.restore();
}

// 绘制小地图
export function drawMinimap() {
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(MAP_SIZE.x, MAP_SIZE.y, MAP_SIZE.w, MAP_SIZE.h);
    ctx.strokeStyle = '#aaa';
    ctx.strokeRect(MAP_SIZE.x, MAP_SIZE.y, MAP_SIZE.w, MAP_SIZE.h);

    // 固体
    ctx.fillStyle = '#8b5e3c';
    solids.forEach(s => {
        const mx = MAP_SIZE.x + (s.x / WORLD_WIDTH) * MAP_SIZE.w;
        const my = MAP_SIZE.y + (s.y / WORLD_HEIGHT) * MAP_SIZE.h;
        ctx.fillRect(mx - 2, my - 2, 4, 4);
    });

    // 玩家
    ctx.fillStyle = '#fff';
    const pmx = MAP_SIZE.x + (player.x / WORLD_WIDTH) * MAP_SIZE.w;
    const pmy = MAP_SIZE.y + (player.y / WORLD_HEIGHT) * MAP_SIZE.h;
    ctx.fillRect(pmx - 2, pmy - 2, 4, 4);
}

// 绘制鼠标十字
export function drawMouseCross() {
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(mouse.screenX - 8, mouse.screenY);
    ctx.lineTo(mouse.screenX - 3, mouse.screenY);
    ctx.moveTo(mouse.screenX + 3, mouse.screenY);
    ctx.lineTo(mouse.screenX + 8, mouse.screenY);
    ctx.moveTo(mouse.screenX, mouse.screenY - 8);
    ctx.lineTo(mouse.screenX, mouse.screenY - 3);
    ctx.moveTo(mouse.screenX, mouse.screenY + 3);
    ctx.lineTo(mouse.screenX, mouse.screenY + 8);
    ctx.stroke();
}

// 绘制D20文字
export function drawD20() {
    ctx.fillStyle = '#ffd966';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('D20', VIEW_WIDTH - 40, 20);
}