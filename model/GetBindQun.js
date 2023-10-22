import fs from 'fs';
import { GetYamlValue } from './GetYamlValue.js';
let dir;
export function GetBindQun (e) {
  Bot.logger.mark("[寸幼萱淫趴][model/GetBindQun]正在请求绑定QQ号......");
  if (GetYamlValue(e,"data","IsBind")==false) {
    dir = Bot.uin;
    Bot.logger.mark("在局部数据查找中...");
  } else {
    dir = "all";
    Bot.logger.mark("在全局数据查找中...");
  }
  try {
    let TextJson = fs.readFileSync('./plugins/impart_cunyx-plugin/data/'+dir+'/bind.json');
    let Json = JSON.parse(TextJson);
    let qun = Json[e.user_id];
    Bot.logger.info("查询成功，返回"+qun);
    return qun;
  } catch (err) {
    Bot.logger.error("查找失败，返回null\n"+Br);
    return null;
  }
}