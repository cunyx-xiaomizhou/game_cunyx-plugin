import plugin from './../../../lib/plugins/plugin.js';
export class news extends plugin {
  constructor () {
    super({
      name:"每日60秒",
      dsc:"每日60秒看世界",
      event:"message",
      priority:500,/*优先级*/
      rule:[
        {reg:"^#?(每|今)日(60(秒|s|S)|新闻|早报)$",fnc:"news",}
      ]
    });
  }
  async news (e) {
    e.reply('该功能已移交给千羽插件(qianyu-plugin)运营，如果想继续使用请安装千羽插件。千羽早报正在开发中，想知道开发进度请进入千羽群聊(群号860111915)');
  }
}