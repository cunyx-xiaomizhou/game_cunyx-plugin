import fs from 'fs';
import { GetYamlValue } from './GetYamlValue.js';
import { GetYamlArrayRandomValue } from './GetYamlArrayRandomValue.js';
let dir;
export function start (e,IsData,FileName) {
  Bot.logger.mark("[寸幼萱淫趴][model/start]正在检查数据是否存在.....");
  try {
    if (GetYamlValue(e,"data",IsData)==true) {
      dir = "all";
    } else {
      dir = Bot.uin;
    }
    let filePath = './plugins/impart_cunyx-plugin/data/'+dir+'/'+FileName+'.json';
    try {
    if (!fs.existsSync(filePath)) {
      let content = {};
      fs.writeFileSync(filePath, JSON.stringify(content));
      let Msg = GetYamlArrayRandomValue(e,"system","start").replace(/{_path_}/,"data/"+dir+"/"+FileName+".json");
      Bot.logger.info("[寸幼萱淫趴][model/start]"+Msg);
      e.reply(Msg,true);
    } else {
      let Msg = GetYamlArrayRandomValue(e,"system","start_already");
      Bot.logger.info("[寸幼萱淫趴][model/start]"+Msg);
      return true;
    }
    } catch (err) {
        fs.writeFileSync(filePath,JSON.stringify(content));
    }
    /**
    if (fs.existsSync('./plugins/impart_cunyx-plugin/data/'+dir+'/'+FileName+".json")) {
      let Msg = GetYamlArrayRandomValue(e,"system","start_already");
      Bot.logger.info("[寸幼萱淫趴][model/start]"+Msg);
      return true;
    } else {
      fs.writeFile('./plugins/impart_cunyx-plugin/data/'+dir+'/'+FileName+'.json',JSON.stringify({}),(err) => {
        if (err) throw err;
        let Msg = GetYamlArrayRandomValue(e,"system","start").replace(/{_path_}/,"data/"+dir+"/"+FileName+".json");
        Bot.logger.info("[寸幼萱淫趴][model/start]"+Msg);
        e.reply(Msg,true);
      });
    }*/
  } catch (err) {
    Bot.logger.error("[寸幼萱淫趴][model/start]错误信息如下：\n"+err);
    e.reply("文件初始化失败，错误已打印至控制台，请检查",true);
  }
}