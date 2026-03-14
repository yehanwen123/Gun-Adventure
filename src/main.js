import { Loader } from './engine/Loader.js';
import { Renderer } from './engine/Renderer.js';
import { VIEW_WIDTH, VIEW_HEIGHT } from './config.js';
import { initInput } from './input.js';
import { initWorld } from './world.js';
import { player, movePlayer } from './player.js';
import { camera, updateCamera } from './camera.js';
import { initRenderer, drawWorld, drawMinimap, drawMouseCross, drawD20 } from './render.js';

// 获取canvas并设置
const canvas = document.getElementById('gameCanvas');
canvas.width = VIEW_WIDTH;
canvas.height = VIEW_HEIGHT;
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

// 初始化各模块
initInput(canvas);
initWorld();
initRenderer(ctx);

// 游戏循环
let lastTime = 0;
function gameLoop(now) {
    if (!lastTime) { lastTime = now; requestAnimationFrame(gameLoop); return; }
    const dt = Math.min(100, now - lastTime);
    lastTime = now;

    movePlayer(dt);
    updateCamera(player);
    drawWorld();
    drawMinimap();
    drawMouseCross();
    drawD20();

    requestAnimationFrame(gameLoop);
}

gameLoop(0);