import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import YAML from 'yaml';
import fs from 'fs';

let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));

export class make_friends extends plugin {
  constructor () {
    super({
      name:"扩列交友",
      dsc:"获取所有寸幼萱用户之一扩列QQ号",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?提交信息",fnc:'post'},
        {reg:'^#?获取信息',fnc:'get'}
      ]
    });
  }
  async post (e) {
    let json = await fetch(`http://plugin.cunyx.cn/cunyx-plugin/apps/make_friend.php?qq=${data.qq}&token=${data.api}&message={"e.user_id":"${e.user_id}"}&type=1`);
    json = await json.json();
    var text = json;
    e.reply('为保护隐私，该指令只能提交自己的信息');
    e.reply(text.msg);
  }
  async get (e) {
    let json = await fetch(`http://plugin.cunyx.cn/cunyx-plugin/apps/make_friend.php?qq=${data.qq}&token=${data.api}&type=2`);
    json = await json.json();
    var text = json;
    if (/^\d+$/.test(text.msg)) {
      e.reply('获取到的QQ是：'+text.msg+'哦~\n快去加一下试试看吧！');
    } else {
      e.reply(text.msg);
    }
  }
}