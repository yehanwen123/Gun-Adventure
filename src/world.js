import { WORLD_WIDTH, WORLD_HEIGHT } from './config.js';

// 固体实体（有碰撞）
export const solids = [];

// 装饰物（无碰撞）
export const decorations = [];

// 初始化世界场景（放置墙壁、障碍物、装饰物）
export function initWorld() {
    // 四周墙壁
    for (let x = 0; x < WORLD_WIDTH; x += 32) {
        solids.push({ x, y: 0, w: 16, h: 16 });
        solids.push({ x, y: WORLD_HEIGHT - 16, w: 16, h: 16 });
    }
    for (let y = 16; y < WORLD_HEIGHT; y += 32) {
        solids.push({ x: 0, y, w: 16, h: 16 });
        solids.push({ x: WORLD_WIDTH - 16, y, w: 16, h: 16 });
    }

    // 内部障碍
    solids.push({ x: 200, y: 200, w: 16, h: 16 });
    solids.push({ x: 300, y: 200, w: 16, h: 16 });
    solids.push({ x: 400, y: 200, w: 16, h: 16 });
    solids.push({ x: 500, y: 200, w: 16, h: 16 });
    solids.push({ x: 600, y: 300, w: 16, h: 16 });
    solids.push({ x: 600, y: 400, w: 16, h: 16 });

    // 装饰物
    decorations.push({ x: 250, y: 300, w: 14, h: 14, color: '#b08968' }); // 木桶
    decorations.push({ x: 350, y: 350, w: 14, h: 14, color: '#b08968' });
    decorations.push({ x: 450, y: 300, w: 16, h: 12, color: '#d4a373' }); // 宝箱
    decorations.push({ x: 550, y: 400, w: 14, h: 18, color: '#aaa' });    // 骷髅
    decorations.push({ x: 580, y: 420, w: 14, h: 18, color: '#aaa' });
}