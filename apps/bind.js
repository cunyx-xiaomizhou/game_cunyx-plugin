import { bind } from './../model/bind.js';
import plugin from './../../../lib/plugins/plugin.js';
import { GetYamlValue } from './../model/GetYamlValue.js';

let qun_id;

export class cunyx_impart_bind extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:绑定群聊",
      dsc:"绑定群聊，可以让用户私聊导管子",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?(淫|银|阴)(趴|扒|啪|爬)绑定(.*)",fnc:"bind"},
        {reg:"^#?查看(当前)绑定$",fnc:"seekbind"}
      ]
    });
  }
  async bind (e) {
    //优先判断用户是否在白名单内
    if (GetYamlValue(e,"bind","white").includes(e.user_id)) {
      //用户处于白名单
      if (e.msg.includes("本")||e.msg.includes("此")) {
        if (!e.group_id) {
          e.reply("私聊仅支持使用群号绑定");
          return true;
        }
        qun_id = e.group_id;
      } else {
        qun_id = e.msg.replace(/(淫|银|阴)(趴|扒|啪|爬)绑定|#/g,"");
      }
      bind(e,e.user_id,e.group_id);
    } else if (GetYamlValue(e,"bind","cond") == true) {
      e.reply("【测试】未在白名单")
    }
  }
}