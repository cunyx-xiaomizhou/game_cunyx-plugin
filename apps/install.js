import plugin from './../../../lib/plugins/plugin.js';
import YAML from 'yaml';
import fs from 'fs';

let data_ = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));

let path = process.cwd()+'/plugins/cunyx-plugin';

let qq;

export class cunyx_install extends plugin {
  constructor () {
    super({
      name:"寸幼萱设置",
      dsc:"对控制面板进行编辑",
      event:"message",
      priority:-999,/*优先级*/
      rule:[
        {reg:"^#?寸幼萱设置(q|Q)(q|Q)",fnc:"qq"},
        {reg:"^#?寸幼萱设置((a|A)(p|P)(i|I)|(t|T)(o|O)(k|K)(e|E)(n|N))",fnc:"token"},
        {reg:"^#?寸幼萱设置(机器人)?名字",fnc:"bot_name"}
      ]
    });
  }
  async qq (e) {
    if (e.isMaster) {
      let msg = e.msg.replace(/(q|Q)|#/g, '').trim();
      let qq = msg.replace(/寸幼萱设置|#/g ,'').trim();
      if (qq == '') {
        qq = e.user_id;
      }
      if (!/^[0-9]{5,12}$/.test(qq)) {
        e.reply('QQ号格式错误，必须为纯数字');
        return true;
      }
      let data = {
        qq: ""+qq+"",
        api: ""+data_.api+""
      };
      let yamlString = YAML.stringify(data);
      try {
        fs.writeFileSync(path+'/config/cunyx_api.yaml', yamlString);
        e.reply(`寸幼萱QQ已被设置为：\n${qq}`);
      } catch (err) {
        e.reply(`寸幼萱qq写入失败，原因如下：\n\n${err}`);
      }
    } else {
      e.reply('你不是我的主人哦');
    }
  }
  async token (e) {
    if (e.group_id) {
      e.reply('温馨提示：\n防止token泄露，请撤回你的token');
    }
    if (e.isMaster) {
      let token = e.msg.replace(/寸幼萱设置((a|A)(p|P)(i|I)|(t|T)(o|O)(k|K)(e|E)(n|N))|#/g ,'').trim();
      if (token == '') {
        e.reply('token不能为空');
        return true;
      }
      if (!/^[a-zA-Z0-9]+$/g.test(token)) {
        e.reply('token格式错误，不能含有文字和特殊字符');
        return true;
      }
      let data = {
        qq: ""+data_.qq+"",
        api: token
      };
      let yamlString = YAML.stringify(data);
      try {
        fs.writeFileSync(path+'/config/cunyx_api.yaml', yamlString);
        let start = 3;
        let end = token.length - 3;
        let echo_token = token.substring(0, start) + "*".repeat(end - start) + token.slice(end);
        e.reply(`寸幼萱token已被设置为：\n${echo_token}`);
      } catch (err) {
        e.reply(`寸幼萱token写入失败，原因如下：\n\n${err}`);
      }
    } else {
      e.reply('你不是我的主人哦');
    }
  }
  async bot_name (e) {
    if (e.isMaster) {
      let msg = e.msg.replace(/(q|Q)|#/g, '').trim();
      let name = msg.replace(/寸幼萱设置(机器人)?名字|#/g ,'').trim();
      let data = {
        name: name,
      };
      let yamlString = YAML.stringify(data);
      try {
        fs.writeFileSync(path+'/config/bot.yaml', yamlString);
        e.reply(`[寸幼萱]机器人新名字为：\n${name}`);
      } catch (err) {
        e.reply(`[寸幼萱]名字写入失败，原因如下：\n\n${err}`);
      }
    } else {
      e.reply('你不是我的主人哦');
    }
  }
}