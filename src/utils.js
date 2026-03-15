// utils.js
/**
 * 检测两个圆形是否碰撞
 * @param {Object} a - 实体a，包含 { x, y, radius }
 * @param {Object} b - 实体b，包含 { x, y, radius }
 * @returns {boolean}
 */
export function checkCollision(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < a.radius + b.radius;
}