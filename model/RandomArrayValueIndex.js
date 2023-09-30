import { random } from './random.js';
export function RandomArrayValueIndex (array) {
  //计算索引
  let randomIndex = random(0,array.length - 1);
  Bot.logger.mark(randomIndex);
  //取得值
  let randomElement = array[randomIndex];
  //返回值
  return randomElement;
}