import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import YAML from 'yaml';
import fs from 'fs';

let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));

export class cunyx_suffix_name extends plugin {
  constructor () {
    super({
      name:"后缀名",
      dsc:"不用模块生成带后缀的名字",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?(生成)?后缀名(格式|帮助)",fnc:"help"},
        {reg:"^#?后缀名(.*)$",fnc:"sc"}
      ]
    });
  }
  async help (e) {
    e.reply('寸幼萱后缀名生成使用帮助：\n\n使用指令\n【#后缀名 + 后缀名的名字部分 ， 后缀名的后缀部分】\n\n在使用时请将加号以及大括号去掉，感谢配合\n\n名字与后缀支持的分隔符：\n    ● “，”\n    ● “,”\n    ● “ ”\n    ● “。”\n    ● “·”\n    ● “●”');
  }
  async sc (e) {
    let user_msg = e.msg.replace(/后缀名|#/g, '').trim();
    let str_1 = user_msg.replace(/，|#/g,',').trim();
    let str_2 = str_1.replace(/。|#/g,',').trim();
    let str_3 = str_2.replace(/·|#/g,',').trim();
    let str_4 = str_3.replace(/●|#/g,',').trim();
    let str = str_4.replace(/ |#/g,',');
    let parts = str.split(",");
    if (parts.length !== 2) {
      if (parts.length > 1 ) {
        e.reply("格式错误，错误码：1\n请发送【#后缀名帮助】查看正确格式");
        return;
      } else {
        e.reply("格式错误，错误码：2\n请发送【#后缀名帮助】查看正确格式");
        return;
      }
    }
    let name = parts[0].trim();
    let suffix = parts[1].trim();
    try {
      let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/suffix-name.php?qq=${data.qq}&token=${data.api}&name=${name}&suffix=${suffix}`);
      json = await json.json();
      var text = json;
      if (text.msg[0]==name[0]) e.reply('这是你的后缀名字，快复制粘贴换上吧~');
      setTimeout(() => {
        e.reply(text.msg);
      }, 150);
    } catch (err) {
      e.reply('寸幼萱API请求失败，请检查你的消息内是否包含这些符号：\n{}()[]<>*&$/\\:=_+-|`?!%@"'+"'");
    }
  }
}