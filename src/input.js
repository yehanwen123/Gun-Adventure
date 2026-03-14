import { VIEW_WIDTH, VIEW_HEIGHT } from './config.js';

// 输入状态
export const keys = {};
export const mouse = { screenX: 0, screenY: 0, left: false };

// 初始化事件监听
export function initInput(canvas) {
    window.addEventListener('keydown', (e) => {
        if (e.key.startsWith('Arrow') || 'wasd'.includes(e.key.toLowerCase())) e.preventDefault();
        keys[e.key.toLowerCase()] = true;
    });
    window.addEventListener('keyup', (e) => keys[e.key.toLowerCase()] = false);

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        mouse.screenX = (e.clientX - rect.left) * scaleX;
        mouse.screenY = (e.clientY - rect.top) * scaleY;
        // 可选：限制在画布内
        mouse.screenX = Math.max(0, Math.min(canvas.width, mouse.screenX));
        mouse.screenY = Math.max(0, Math.min(canvas.height, mouse.screenY));
    });

    canvas.addEventListener('mousedown', (e) => { e.preventDefault(); if (e.button === 0) mouse.left = true; });
    canvas.addEventListener('mouseup', (e) => { if (e.button === 0) mouse.left = false; });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    window.addEventListener('blur', () => {
        // 清空所有按键
        Object.keys(keys).forEach(k => keys[k] = false);
        mouse.left = false;
    });
}