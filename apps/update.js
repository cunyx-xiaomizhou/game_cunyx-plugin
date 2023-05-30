import plugin from './../../../lib/plugins/plugin.js';
import YAML from 'yaml';
import fetch from 'node-fetch';
import fs from 'fs';

export class cunyx_update extends plugin {
  constructor () {
    super({
      name:"寸幼萱插件更新",
      dsc:"检查和更新寸幼萱插件",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?(c|C|寸)(.*)?检查(.*)?",fnc:"seek",}
      ]
    });
  }
  async seek (e) {
    let data = JSON.parse(fs.readFileSync('./plugins/cunyx-plugin/package.json'));
    let text = await fetch(`http://plugin.cunyx.cn/cunyx-plugin/update/`);
    text = await text.json();
    var new_ver = text;
    let msg = `寸幼萱插件当前版本【${data.version}】\n\n寸幼萱插件开放下载的最新版本为【${new_ver.ver}】\n详情见下述转发消息`;
    e.reply(msg);
    let arr = [`寸幼萱插件【${new_ver.ver}】版本说明`,`主要更新：\n\n${new_ver.msg}`,`更新方法：\n\n${new_ver.update}`];
    sendMsg (e,arr);
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