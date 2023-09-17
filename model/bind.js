import fs from 'fs';
import { GetYamlValue } from 'GrtYamlValue.js';
import { RandomArrayValueIndex } from 'RandomArrayValueIndex.js';
export function bind (e,qq_id,qun_id) {
  let JsonText = fs.readFileSync('./plugins/impart_cunyx-plugin/data/bind.json');
  let Json = JSON.parse(JsonText);
  Json[qq_id] = qun_id;
  let NewJson = JSON.stringify(Json);
  fs.writeFile('./plugins/impart_cunyx-plugin/data/bind.json', NewJson, (err) => {
    if (err) throw err;
    let wenan_array = GetYamlValue(e,"bind","language");
    let wenan = RandomArrayValueIndex(wenan_array);
    let msg = e.msg.replace(/{qq_id}/,qq_id).replace(/{qun_id}/,qun_id)/
    e.reply(msg,true);
  });
}