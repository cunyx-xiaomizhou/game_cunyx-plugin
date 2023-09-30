import fs from 'fs';
import { GetYamlValue } from './GetYamlValue.js';
let dir;
export function GetBindQun (e) {
  if (GetYamlValue(e,"data","IsBind")==true) {
    dir = Bot.uin;
  } else {
    dir = "all";
  }
  try {
    let TextJson = fs.readFileSync('./plugins/impart_cunyx-plugin/data/'+dir+'/bind.json');
    let Json = JSON.parse(TextJson);
    let qun = Json[e.user_id];
    return qun;
  } catch (err) {
    return null;
  }
}