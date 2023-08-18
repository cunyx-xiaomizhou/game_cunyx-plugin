import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import YAML from 'yaml';
import fs from 'fs';

let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));

export class cunyx_suffix_name extends plugin {
  constructor () {
    super({
      name:"发邮件",
      dsc:"对他人发送邮件",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?发(送)?(邮件|匿名信)(格式|帮助)",fnc:"help"},
        {reg:"^#?发(送)?(邮件|匿名信)(.*)$",fnc:"send"}
      ]
    });
  }
  async help (e) {
    e.reply('寸幼萱匿名信生成使用帮助：\n\n使用指令：【#发邮件 收件人邮箱地址:邮件主题:邮件内容】分割请用英文冒号“:”进行分割');
  }
  async send (e) {
    let str = e.msg.replace(/发(送)?(邮件|匿名信)|#/g, '').trim();
    let parts = str.split(":");
    if (parts.length !== 3) {
      if (parts.length > 3 ) {
        e.reply("格式错误，错误码：1\n请发送【#发邮件帮助】查看正确格式");
        return;
      } else {
        e.reply("格式错误，错误码：2\n请发送【#发邮件帮助】查看正确格式");
        return;
      }
    }
    let email = parts[0].trim();
    let title = parts[1].trim();
    let content = parts[2].trim();
    e.reply('我开始尝试发送了哦，请稍等~');
    try {
      let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/sendemail.php?qq=${data.qq}&token=${data.api}&email=${email}&title=${title}&content=${content}`);
      json = await json.json();
      var text = json;
      if (text.cond=='normal') {
        e.reply("邮件发送成功\n"+text.msg,true);
      } else {
        e.reply("邮件发送失败，本次调用未消耗token\n"+text.msg,true);
      }
    } catch (err) {
      e.reply('寸幼萱API请求失败，请检查你的消息内是否包含html代码或者反斜杠(\\)之类特殊字符',true);
    }
  }
}