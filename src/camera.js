import { VIEW_WIDTH, VIEW_HEIGHT } from './config.js';

export const camera = { x: 0, y: 0 };

// 摄像机跟随玩家
export function updateCamera(player) {
    camera.x = player.x - VIEW_WIDTH / 2;
    camera.y = player.y - VIEW_HEIGHT / 2;
}