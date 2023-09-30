export function random (low,height) {
  //盘点是否为固定值
  if (low == height) {
    //直接返回固定值
    return low;
  }
  //先使用系统随机数返回0~1的小数
  let system_number = Math.random();
  //将数字转为字符串
  let system_str = system_number + "";
  //以小数点分割，获取整数和小数的数组
  let array_number = system_str.split(".");
  //获取小数部分
  let SmallNumber = array_number[1];
  //得到小数部分第一位(0~9)
  let MathFirstNumber = SmallNumber[0];
  //如果最小值大于最大值
  if (low > height) {
    //返回失败数据
    return false;
  }
  //计算最大值与最小值差值
  let D = height - low;
  //乘以差值并除以十(0~0.9n)
  let MaxNumber = MathFirstNumber * D / 10;
  //取上述数字的整数部分(采用四舍五入)(0~n-low+1)
  let Normalnumber = MaxNumber + 0.5;
  let NormalNumberStr = Normalnumber + "";
  let NormalNumber = NormalNumberStr.split(".");
  //加上最小值使恢复正常
  let ResultNumber = NormalNumber[0] + low;
  //如果大于最大值就减一
  if (ResultNumber > height) {
    return ResultNumber - 1;
  }
  //如果小于最小值就减一
  if (ResultNumber < low) {
    return ResultNumber + 1;
  }
  //本身就正常直接返回
  return ResultNumber;
}