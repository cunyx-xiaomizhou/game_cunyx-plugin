export function random (low, high) {
  Bot.logger.mark("[寸幼萱淫趴][model/random]开始调用随机数函数...");
  Bot.logger.mark("传入最小值："+low+"；传入最大值："+high);
  // 检查最小值是否等于最大值
  if (low === high) {
    return low;
    Bot.logger.info("最大值与最小值相等，直接返回固定值"+low);
  }
  // 确保最小值小于最大值
  if (low > high) {
    [low, high] = [high, low];
    Bot.logger.error("错误：传入的最大值小于最小值！");
    Bot.logger.info("已将最大值最小值调换位置，处理完成");
  }
  // 计算范围内的整数个数
  const count = high - low + 1;
  // 生成随机整数，并返回
  let Num = Math.floor(Math.random() * count) + low;
  return Num;
  Bot.logger.info("调用完成，返回值："+Num);
}