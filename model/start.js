import fs from 'fs';
import YAML from 'yaml';
export function start (e) {
  let system_start = YAML.parse(fs.readFileSync('./plugins/impart_cunyx-plugin/config/impart_start.yaml','utf-8'));
  try {
    fs.readFileSync(process.cwd() + "/plugins/impart_cunyx-plugin/data/" + e.group_id + ".json");
    e.reply();
  } catch (err) {
    e.reply();
  }
}