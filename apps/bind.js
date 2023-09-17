
import plugin from './../../../lib/plugins/plugin.js';
import { GetYamlValue } from './../model/GetYamlValue.js';
export class cunyx_impart_bind extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:绑定群聊",
      dsc:"绑定群聊，可以让用户私聊导管子",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?绑定(.*)",fnc:"bind"},
        {reg:"^#?查看(当前)绑定$",fnc:"seekbind"}
      ]
    });
  }
  async bind (e) {
    if (GetYamlValue(e,"bind","cond")) {
      e.reply("函数可用");
    }
  }
}