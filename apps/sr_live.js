import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import YAML from 'yaml';
import fs from 'fs';

let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));

export class sr_live extends plugin {
  constructor () {
    super({
      name:"星铁前瞻直播",
      dsc:"获取星铁前瞻直播的信息和兑换码",
      event:"message",
      priority:2,/*优先级*/
      rule:[
        {reg:"^#?星铁兑换码",fnc:"cdkey",},
        {reg:"^#?星铁前瞻",fnc:"qz",}
      ]
    });
  }
  async cdkey (e) {
    let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/sr_live.php?qq=${data.qq}&token=${data.api}`);
    json = await json.json();
    var text = json;
    let arr = [text.msg.ver+'版本星铁前瞻直播兑换码','兑换码过期时间：\n'+text.msg.time+'\n请开拓者尽快使用以下兑换码，防止错过三百星琼~',text.msg.cdkey_1,text.msg.cdkey_2,text.msg.cdkey_3,text.msg.add];
    sendMsg(e,arr);
  }
  async qz (e) {
    let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/sr_live.php?qq=${data.qq}&token=${data.api}`);
    json = await json.json();
    var text = json;
    let arr = [text.msg.qz+'\n\n获取星铁前瞻兑换码请发送#星铁兑换码',text.msg.add];
    sendMsg(e,arr);
  }
}
async function sendMsg(e, msg) {
  let data_msg = [];
  for (let i = 0; i < msg.length; i++) {
    if (msg[i].startsWith('http') || msg[i].startsWith('data:image')) {
      data_msg.push({
        message: segment.image(msg[i]),
        nickname: Bot.nickname,
        user_id: Bot.uin,
      });
      continue;
    }
    data_msg.push({
      message: msg[i],
      nickname: Bot.nickname,
      user_id: Bot.uin,
    });
  }
  let send_res = null;
  if (e.isGroup)
    send_res = await e.reply(await e.group.makeForwardMsg(data_msg));
  else send_res = await e.reply(await e.friend.makeForwardMsg(data_msg));
  if (!send_res) {
    e.reply("消息发送失败，可能被风控~");
  }
  return true;
}