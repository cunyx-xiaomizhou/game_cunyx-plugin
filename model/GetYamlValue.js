import YAML from 'yaml';
import fs from 'fs';
export function GetYamlValue (e,FileName,Name) {
  let data = YAML.parse(fs.readFileSync('./plugins/impart_cunyx-plugin/config/' + FileName +'.yaml','utf-8'));
  try {
    let value = data[e.group_id][Name];
    return value;
  } catch (err) {
    try {
      let value = data.def[Name];
      return value;
    } catch (err) {
      let value = data[Name];
      return value;
    }
  }
}