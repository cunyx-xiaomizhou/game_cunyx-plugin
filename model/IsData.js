import fs from 'fs';
//import { start } from './start.js';
import { GetYamlValue } from './GetYamlValue.js';
let dir;
export function IsData (e,IsData,FileName) {
  if (GetYamlValue(e,"data",IsData)==true) {
    dir = "all";
  } else {
    dir = Bot.uin;
  }
  try {
    fs.readFileSync("./plugins/impart_cunyx-plugin/data/"+dir+"/"+FileName+".json");
    return true;
  } catch (err) {
    //start();
  }
}