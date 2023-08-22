import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import { segment } from 'oicq';
import YAML from 'yaml';
import fs from 'fs';
let qq;
let msg;
let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));
export class plugin_name extends plugin {
  constructor () {
    super({
      name:"土味情话",
      dsc:"来啊撩我啊",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?(撩(我)?|土味情话)$",fnc:"cheesy_pick_up_lines"}
      ]
    });
  }
  async cheesy_pick_up_lines (e) {
    if (e.msg.includes('我')) {
      qq = e.user_id;
    } else {
      qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq);
      if (qq == '') {
        qq = e.user_id;
      }
    }
    try {
      let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/cpl.php?qq=${data.qq}&token=${data.api}`);
      json = await json.json();
      var text = json;
      try {
        let msg = [
          segment.at(qq),
          "【",Bot.fl.get(qq).nickname,"】",
          "\n",
          text.msg
        ];
        e.rpely(msg);
      } catch (err) {
        let msg = [
          segment.at(qq),
          "\n",
          text.msg,
        ];
        e.reply(msg);
      }
    } catch (err) {
      e.reply('api请求错误');
    }
  }
}