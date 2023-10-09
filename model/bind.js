import fs from 'fs';
import { start } from './start.js';
import { GetYamlValue } from './GetYamlValue.js';
import { GetYamlArrayRandomValue } from './GetYamlArrayRandomValue.js';
let dir;
export function bind (e,qq_id,qun_id) {
  let JsonText;
  if (GetYamlValue(e,"data","IsBind")==true) {
    dir = "all";
  } else {
    dir = Bot.uin;
  }
  try {
    if (fs.existsSync('./plugins/impart_cunyx-plugin/data/'+dir+'/bind.json')) {
      JsonText = fs.readFileSync('./plugins/impart_cunyx-plugin/data/'+dir+'/bind.json');
    } else {
      JsonText = {};
    }
    let Json = JSON.parse(JsonText);
    Json[qq_id] = qun_id;
    let NewJson = JSON.stringify(Json);
    fs.writeFile('./plugins/impart_cunyx-plugin/data/' + dir + '/bind.json', NewJson, (err) => {
      if (err) throw err;
      let wenan = GetYamlArrayRandomValue(e,"bind","language");
      let msg = wenan.replace(/{qq_id}/,qq_id).replace(/{qun_id}/,qun_id);
      e.reply(msg,true);
    });
  } catch (err) {
    Bot.logger.error(err);
    Bot.logger.error("程序终止运行");
  }
}