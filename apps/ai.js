import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import YAML from 'yaml';
import fs from 'fs';

let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));
let bot = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/bot.yaml','utf-8'));

export class cunyx_ai extends plugin {
  constructor () {
    super({
      name:"ai对话",
      dsc:"寸幼萱自主研发的ai对话",
      event:"message",
      priority:5001,/*优先级*/
      rule:[
        {reg:"^#?(a|A)(i|I)",fnc:"ai"}
      ]
    });
  }
  async ai (e) {
    try {
      let msg = e.msg.replace(/#?(a|A)(i|I)|#/g,"").trim();
      let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/ai.php?qq=${data.qq}&token=${data.api}&msg=${msg}&name=${bot.name}`);
      json = await json.json();
      var text = json;
      e.reply(`${text.msg}\n\n本次消耗${text.token}次寸幼萱token`);
    } catch (err) {
      e.reply('调用寸幼萱对话api失败，请检查消息中是否含有英文半角符号');
    }
  }
}