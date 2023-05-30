import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import YAML from 'yaml';
import fs from 'fs';

let api = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/sr_msg.yaml','utf-8'));

export class sr_msg extends plugin {
  constructor () {
    super({
      name:"星铁信息",
      dsc:"获取《崩坏：星穹铁道》基本账号信息",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?星铁信息",fnc:"sr_msg",}
      ]
    });
  }
  async sr_msg (e) {
    let uid = e.msg.replace(/星铁信息|#/g, '').trim();
    if (!uid) {
      e.reply('没有要查询的对象，请严格按照以下规则发送：\n\n#星铁信息110313071\n\n其中可替换部分只有uid部分，其他部分不可替换！');
    } else {
      let json = await fetch(`${api.api}${uid}`);
      json = await json.json();
      var text = json;
      let msg = `玩家uid${uid}的信息如下：\n昵称：${text.nickname}\n开拓等级：${text.level}\n\n暂时只能获取这些信息，在enka的星铁api研究完成之前不打算更了，除非有其他的api开放。如果你有api请在插件根目录的README.md进群寻找小米粥反馈，感谢您的支持`;
      e.reply(msg);
    }
  }
}