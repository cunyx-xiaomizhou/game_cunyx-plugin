import fs from 'fs';
import { start } from './../model/start.js';
import { GetBindQun } from './../model/GetBindQun.js';
import plugin from './../../../lib/plugins/plugin.js';
import { GetYamlValue } from './../model/GetYamlValue.js';
import { GetYamlArrayRandomValue } from './../model/GetYamlArrayRandomValue.js';
let BeQQ;
let qun_id;
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
      } else {
        qun_id = qun_id;
      }
    } else {
      qun_id = qun_id;
    }
    //提取用户QQ号
    let reg = new RegExp(GetYamlValue(e,'daoguanzi','reg'),"g");
    let BeQQ = e.msg.replace(reg,"").trim();
    if (/^\d{5,10}$/.test(BeQQ)==false) {
      //QQ号格式不正确就从消息中强制提取
      BeQQ = e.message.filter(item => item.type == 'at')?.map(item => item?.qq);
    } else {
      BeQQ = BeQQ;
    }
    if (GetYamlValue(e,'daoguanzi','cond')!==true) {
      start(e,IsPublic,qun_id);
    } else {
      //淫趴被关闭
    }
  }
}
