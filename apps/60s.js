import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import { segment } from 'oicq';
import YAML from 'yaml';
import fs from 'fs';

let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));

export class news extends plugin {
  constructor () {
    super({
      name:"每日60秒",
      dsc:"每日60秒看世界",
      event:"message",
      priority:-99999999,/*优先级*/
      rule:[
        {reg:"^#?(每|今)日(60(秒|s|S)|新闻|早报)",fnc:"news",}
      ]
    });
  }
  async news (e) {
    let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/60s.php?qq=${data.qq}&token=${data.api}`);
    json = await json.json();
    var text = json;
    if (text.msg.charAt(0)==='h') {
      let news = await fetch(text.msg);
      news = await news.json();
      var news_json = news;
      let arr = news_json.news.split(',');
      arr.unshift(news_json.image);
      arr.push(news_json.weiyu);
      sendMsg(e,arr);
    } else {
      e.reply(msg);
    }
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