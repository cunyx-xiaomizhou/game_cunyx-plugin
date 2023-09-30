import { random } from './random.js';
export function RandomArrayValueIndex (array) {
  //计算索引
  let long = array.length;
  let randomIndex = random(0,long - 1);
  Bot.logger.info("[寸幼萱淫趴][model/RandomArrayValueIndex]随机数组值请求成功！")
  Bot.logger.mark("随机的数组值的索引是："+randomIndex);
  Bot.logger.info("数组长度："+long);
  //取得值
  let randomElement = array[randomIndex];
  //返回值
  return randomElement;
}