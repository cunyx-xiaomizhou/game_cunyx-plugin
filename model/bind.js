import fs from 'fs';
import { start } from './start.js';
import { GetYamlValue } from './GetYamlValue.js';
import { RandomArrayValueIndex } from './RandomArrayValueIndex.js';
let dir;
export function bind (e,qq_id,qun_id) {
  if (GetYamlValue(e,"data","IsBind")==true) {
    dir = "all";
  } else {
    dir = Bot.uin;
  }
  try {
    let JsonText = fs.readFileSync('./plugins/impart_cunyx-plugin/data/'+dir+'/bind.json');
    let Json = JSON.parse(JsonText);
    Json[qq_id] = qun_id;
    let NewJson = JSON.stringify(Json);
    fs.writeFile('./plugins/impart_cunyx-plugin/data/' + dir + '/bind.json', NewJson, (err) => {
      if (err) throw err;
      let wenan_array = GetYamlValue(e,"bind","language");
      let wenan = RandomArrayValueIndex(wenan_array);
      let msg = wenan.replace(/{qq_id}/,qq_id).replace(/{qun_id}/,qun_id);
      e.reply(msg,true);
    });
  } catch (err) {
    start(e,"IsBind","data");
  }
}