import plugin from './../../../lib/plugins/plugin.js';
import fs from 'fs';
export class path_ extends plugin {
  constructor () {
    super({
      name:"调试文件",
      dsc:"安装时遇到问题的特殊文件",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?机器人根目录",fnc:"path_"},
        {reg:"^#?查看文件",fnc:"look"}
      ]
    });
  }
  async path_ (e) {
    e.reply(process.cwd());
  }
  async look (e) {
    if (e.group_id) {
      e.reply('请在私聊使用');
      return true;
    }
    if (!e.isMaster) {
      e.reply('请以主人身份命令我');
      return true;
    }
    let path = e.msg.replace(/查看文件|#/g, '').trim();
    try {
      let api_text = fs.readFileSync(process.cwd()+'/'+path,'utf-8');
    } catch (err) {
      e.reply('该文件不存在')
    }
    e.reply(api_text);
  }
}