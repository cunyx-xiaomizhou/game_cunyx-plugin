export function LooseNumber (Number,long) {
  Bot.logger.mark("[寸幼萱淫趴][model/LooseNumber]正在调用数字补全函数...");
  let strlong = Number.length;
  if (strlong>=long) {
    Bot.logger.info("长度正常，无需补齐~");
    return Number;
  }
  for (;strlong<long;strlong++) {
    Number = "0" + Number;
  }
  Bot.logger.info("补齐完成，返回"+Number);
  return Number;
}