import fs from 'fs';
import { start } from './../model/start.js';
import { GetBindQun } from './../model/GetBindQun.js';
import plugin from './../../../lib/plugins/plugin.js';
import { GetYamlValue } from './../model/GetYamlValue.js';
import { GetYamlArrayRandomValue } from './../model/GetYamlArrayRandomValue.js';
export class CunyxImpart_daoguanzi extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:导管子",
      dsc:"让用户开心的导管子吧！",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?"+GetYamlValue("e","daoguanzi","reg")+"$",fnc:"dgz"}
      ]
    });
  }
  async daoguanzi (e) {
    if (!e.group_id) {
      let qun_id = GetBindQun(e);
      if (qun_id==null) {
        let Msg = GetYamlArrayRandomValue(e,'daoguanzi','NotBind');
        e.reply(Msg,true);
        return false;
      }
    } else {
      qun_id = e.user_id;
    }
    start(e,IsPublic,qun_id);
    if (GetYamlValue(e,"daoguanzi","cond")==false) {
      e.reply("本群淫趴已被关闭，快去叫我的主人开启吧！",true);
      return false;
    }
  }
}
