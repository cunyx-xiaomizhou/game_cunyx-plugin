import YAML from 'yaml';
import fs from 'fs';
export function GetYamlValue (e,FileName,Name,qun_id) {
  Bot.logger.mark("[寸幼萱淫趴][model/GetYamlValue]开始调用获取控制面板值函数...");
  Bot.logger.mark("目标文件名："+FileName+'.yaml')
  let data = YAML.parse(fs.readFileSync('./plugins/impart_cunyx-plugin/config/' + FileName +'.yaml','utf-8'));
  try {
    Bot.logger.mark("尝试读取群单独配置....");
    if (qun_id) {
      let value = data[qun_id][Name];
      Bot.logger.info("读取群配置成功，返回"+value);
      return value;
    }
    let value = data[e.group_id][Name];
    Bot.logger.info("读取群配置成功，返回"+value);
    return value;
  } catch (err) {
    Bot.logger.mark("读取群配置失败，尝试读取默认配置");
    try {
      let value = data.def[Name];
      Bot.logger.info("默认值读取成功，返回"+value);
      return value;
    } catch (err) {
      try {
        Bot.logger.mark("默认值读取失败，正在使用常规读取方式...");
        let value = data[Name];
        Bot.logger.info("读取成功，返回"+value);
        return value;
      } catch (err) {
        Bot.logger.error("读取失败！错误如下：");
        Bot.logger.error(err);
        e.reply("程序出错，报错已打印至控制台，请联系相关人员处理",true);
        Bot.logger.error("返回false，程序终止运行");
        return false;
      }
    }
  }
}