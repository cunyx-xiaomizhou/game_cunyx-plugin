export function randomInteger(low, high) {
  // 检查最小值是否等于最大值
  if (low === high) {
    return low;
  }
  // 确保最小值小于最大值
  if (low > high) {
    [low, high] = [high, low];
  }
  // 计算范围内的整数个数
  const count = high - low + 1;
  // 生成随机整数，并返回
  return Math.floor(Math.random() * count) + low;
}