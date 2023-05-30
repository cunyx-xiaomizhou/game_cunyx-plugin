 import plugin from '../../../lib/plugins/plugin.js';
 import fetch from 'node-fetch';
 import YAML from 'yaml';
 import fs from 'fs';
 /*文件读取*/
 let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));
 /* 插件介绍部分 */
export class cunyx_api extends plugin {
  constructor () {
    super({
      name:"寸幼萱api",/*功能名称*/
      dsc:"查询我的token可用次数",/*功能介绍*/
      event:"message",/*抄的，不知道啥玩意*/
      priority:999999999,/*优先级*/
      rule:[
        {reg:"^#?(.*)?寸幼萱(t|T|a|A)(.*)?",
          fnc:"api",}
      ]
    });
  }
  /*命令执行*/
  async api (e) {
    let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/chakantoken.php?qq=${data.qq}&token=${data.api}`);
    json = await json.json();
    var text = json;
    if (e.isMaster) {
      if (text.msg!=="^\d") {
        e.reply(`查询结果：\n\nqq号${data.qq}\ntoken剩余有效次数${text.msg}`);
      } else {
        e.reply(`token查询时出现错误：\n\n${text.msg}`);
      }
    } else {
      e.reply('求求你做点人事吧，你也配命令我？');
    }
  }
}