import fs from 'fs';
import { GetYamlValue } from './GetYamlValue.js';
export function PostTextJsonData (e,qun_id,TextJson) {
  Bot.logger.mark("[寸幼萱淫趴][model/PostTextJsonData]开始更新数据文件...");
  if (GetYamlValue(e,"data","IsBind",qun_id)==true) {
    dir = "all";
  } else {
    dir = Bot.uin;
  }
  try {
    fs.writeFile("./plugins/impart_cunyx-plugin/data/"+dir+"/"+qun_id+".json",JSON.stringify(TextJson));
    Bot.logger.info("提交成功，返回true");
    return true;
  } catch (err) {
    Bot.logger.error("提交失败，错误如下：");
    Bot.logger.error(err);
    e.reply("程序运行错误，错误已打印至控制台，请联系相关人员处理",true);
    Bot.logger.error("程序终止运行");
    return false;
  }
}