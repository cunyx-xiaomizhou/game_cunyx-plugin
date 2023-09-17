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
    if (GetYamlValue(e,"bind","whiteQQ").includes(e.user_id)) {
      //用户处于白名单
      if (e.msg.includes("本")||e.msg.includes("此")) {
        if (!e.group_id) {
          e.reply("私聊仅支持使用群号绑定",true);
          return true;
        }
        qun_id = e.group_id;
      } else {
        qun_id = e.msg.replace(/(淫|银|阴)(趴|扒|啪|爬)绑定|#/g,"");
      }
      bind(e,e.user_id,qun_id);
      return true;
    } else if (GetYamlValue(e,"bind","cond") == true) {
      //不处于白名单但绑定功能开启
      if (GetYamlValue(e,"bind","blackQQ").includes(e.user_id)) {
        //用户在黑名单内
        e.reply("你被禁止使用绑定功能",true);
        return false;
      }
      if (!GetYamlValue(e,"bind","refuse").includes(qun_id)) {
        if (e.msg.includes("本")||e.msg.includes("此")) {
          if (!e.group_id) {
            e.reply("私聊仅支持使用群号绑定",true);
            return false;
          }
          qun_id = e.group_id;
        } else {
          qun_id = e.msg.replace(/(淫|银|阴)(趴|扒|啪|爬)绑定|#/g,"");
        }
        bind(e,e.user_id,qun_id);
      } else {
        //群聊属于黑名单，无法绑定
        e.reply("该群聊已被禁止绑定",true);
        return false;
      }
    } else {
      //功能关闭，且不存在白名单
      e.reply("暂未开启绑定功能",true);
      return false;
    }
  }
  async seekbind (e) {
    try {
      let TextJson = fs.readFileSync('./plugins/impart_cunyx-plugin/data/bind.json');
      let Json = JSON.parse(TextJson);
      let group_id = Json[e.user_id];
      e.reply("你的绑定群聊为："+group_id,true);
    } catch (err) {
      e.reply("你还没有绑定过群聊",true);
    }
  }
}