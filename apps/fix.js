import plugin from './../../../lib/plugins/plugin.js';
export class path_ extends plugin {
  constructor () {
    super({
      name:"安装文件",
      dsc:"安装时遇到问题的特殊文件",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?机器人根目录",fnc:"path_",}
      ]
    });
  }
  async path_ (e) {
    e.reply(process.cwd());
  }
}