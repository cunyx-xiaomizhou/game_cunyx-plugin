import plugin from './../../../lib/plugins/plugin.js';
import YAML from 'yaml';
import { exec } from 'child_process';
import fetch from 'node-fetch';
import fs from 'fs';

let prosessPath = process.cwd();
let PluginPath = `${process.cwd()}/plugins/cunyx-plugin/`;

export class cunyx_update extends plugin {
  constructor () {
    super({
      name:"寸幼萱插件更新",
      dsc:"检查和更新寸幼萱插件",
      event:"message",
      priority:-9999999,/*优先级*/
      rule:[
        {reg:"^#?((寸|村)(幼萱)?|(c|C)(u|U)?(n|N)?(y|Y)(x|X))(.*)?检查(.*)?",fnc:"seek",},
        {reg:"^#?((寸|村)(幼萱)?|(c|C)(u|U)?(n|N)?(y|Y)(x|X))(.*)?更新(.*)?",fnc:"update",}
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
  async update (e) {
    if (e.isMaster || e.user_id=='2996849867') {
      let isForce = e.msg.includes('强制');
      let command = 'git  pull';
      if (isForce) {
        command = 'git  checkout . && git  pull';
        e.reply('正在执行强制更新操作，请稍等');
      } else {
        e.reply('正在执行更新操作，请稍等');
      }
      exec(command, {cwd: `${prosessPath}/plugins/cunyx-plugin/`}, function (error, stdout, stderr) {
      if (/(Already up[ -]to[ -]date|已经是最新的)/.test(stdout)) {
        e.reply('目前已经是最新版寸幼萱插件了~');
        return true;
      }
      if (error) {
        e.reply('寸幼萱插件更新失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。');
        return true;
      }
      let bot_package = JSON.parse(fs.readFileSync('./package.json','utf-8'));
      let bot_name = bot_package.scripts.log.replace(/pm2 logs --lines 400|#/g, '').trim();
      e.reply('寸幼萱插件更新成功，请手动重启'+bot_name+'以应用更新...');
        return true;
      });
      return true;
    } else {
      e.reply('混蛋！你不是我的主人！');
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