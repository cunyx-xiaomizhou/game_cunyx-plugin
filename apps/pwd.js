import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import YAML from 'yaml';
import fs from 'fs';
let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));
let config = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/pwd.yaml','utf-8'));
export class cunyx_pwd extends plugin {
  constructor () {
    super({
      name:"寸幼萱pwd",/*功能名称*/
      dsc:"对字符串进行只有本方式才能解开的加密",/*功能介绍*/
      event:"message",/*抄的，不知道啥玩意*/
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?解(除)?(加)?密",fnc:"de"},
        {reg:'^#?加密',fnc:'en'}
      ]
    });
  }
  /*命令执行*/
  async de (e) {
    if (config.cond==false) {
      e.reply("本功能已被关闭，无法使用");
      return;
    }
    if (config.Master==true) {
      e.reply("该功能设置了只有主人才能使用");
      return;
    }
    try {
      let msg = e.msg.replace(/解(除)?(加)?密|#/g, '').trim();
      let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/pwd.php?qq=${data.qq}&token=${data.api}&type=decrypt&key=${config.key}&msg=${msg}`);
      json = await json.json();
      var text = json;
      if (text.msg!="err") {
        e.reply(`按照key=${config.key}解密后为：`);
        setTimeout(function() {
            e.reply(text.msg,true);
        }, 200);
      } else {
        e.reply("缺少参数，具体信息：\n".text.msg);
      }
    } catch (err) {
      e.reply("寸幼萱api调用失败，作者也没想到会有人遇见这样的情况",true);
    }
  }
  async en (e) {
    if (config.cond==false) {
      e.reply("本功能已被关闭，无法使用");
      return;
    }
    if (config.Master==true) {
      e.reply("该功能设置了只有主人才能使用");
      return;
    }
    try {
      let msg = e.msg.replace(/加密|#/g, '').trim();
      let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/pwd.php?qq=${data.qq}&token=${data.api}&type=encrypt&key=${config.key}&msg=${msg}`);
      json = await json.json();
      var text = json;
      if (text.msg!="err") {
        e.reply(`按照key=${config.key}加密后为：`);
        setTimeout(function() {
            e.reply(text.msg,true);
        }, 200);
      } else {
        e.reply("缺少参数，具体信息：\n".text.msg);
      }
    } catch (err) {
      e.reply("寸幼萱api调用失败，作者也没想到会有人遇见这样的情况",true);
    }
  }
}