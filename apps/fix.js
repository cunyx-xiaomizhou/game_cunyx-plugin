import plugin from './../../../lib/plugins/plugin.js';
import fs from 'fs';
export class path_ extends plugin {
  constructor () {
    super({
      name:"安装文件",
      dsc:"安装时遇到问题的特殊文件",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?机器人根目录",fnc:"path_"},
        {reg:"^#?(a|A)(p|P)(i|I)文件内容",fnc:"api_text"}
      ]
    });
  }
  async path_ (e) {
    e.reply(process.cwd());
  }
  async api_text (e) {
    if (e.group_id) {
      e.reply('请在私聊使用');
      return true;
    }
    let text = fs.readFileSync('./config/cunyx_api.yaml','utf-8');
    e.reply(api_text);
  }
}