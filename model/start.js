import fs from 'fs';
import YAML from 'yaml';
export function start (e) {
  let system_start = YAML.parse(fs.readFileSync('./plugins/impart_cunyx-plugin/config/impart_start.yaml','utf-8'));
  try {
    //检查是否存在数据文件
    fs.readFileSync(process.cwd() + "/plugins/impart_cunyx-plugin/data/" + e.group_id + ".json");
    //存在即继续执行
    e.reply();
    //返回初始化失败(不需要初始化)
    return false;
  } catch (err) {
    //不存在就新增一个文件
    fs.writeFileSync();
    //回复信息
    e.reply();
    //返回成功的数据
    return true;
  }
}