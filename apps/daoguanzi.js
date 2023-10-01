import fs from 'fs';
import { start } from './../model/start.js';
import { GetBindQun } from './../model/GetBindQun.js';
import plugin from './../../../lib/plugins/plugin.js';
import { LooseNumber } from './../model/LooseNumber.js';
import { GetYamlValue } from './../model/GetYamlValue.js';
import { GetYamlArrayRandomValue } from './../model/GetYamlArrayRandomValue.js';
let BeQQ;
let qun_id;
let Number;
let RuleReg = GetYamlValue("e","daoguanzi","reg");
export class CunyxImpart_daoguanzi extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:导管子",
      dsc:"让用户开心的导管子吧！",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?"+RuleReg+"$",fnc:"dgz"}
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
      qun_id = e.group_id;
    }
    //获取控制面板需要的值
    let low = GetYamlValue(e,"daoguanzi","add_low",qun_id);
    let heigh = GetYamlValue(e,"daoguanzi","add_heigh",qun_id);
    let cd = GetYamlValue(e,"daoguanzi","cd",qun_id);
    let Num = random(low,height);
    //计算增长值
    if (Num==height) {
      Number = Num;
    } else {
      Number = Num + LooseNumber(random(0,999),3)/1000;
    }
    //提取用户QQ号
    let reg = new RegExp(GetYamlValue(RuleReg,"g");
    let BeQQ = e.msg.replace(reg,"").trim();
    if (/^\d{5,10}$/.test(BeQQ)==false) {
      BeQQ = e.message.filter(item => item.type == 'at')?.map(item => item?.qq);
      if (BeQQ=="") {
        BeQQ = e.user_id;
      }
    } else {
      BeQQ = BeQQ;
    }
    if (GetYamlValue(e,'daoguanzi','cond')==true) {
      start(e,"IsPublic",qun_id);
      /**
       * @这里打算写一个函数读取JSON数据
       * @毕竟这个同步系统搞的我是心乱啊！
       * @呜呜呜安慰安慰孩子发点电吧
       */
      //let OldJson = JSON.parse();
      if (e.group_id) {
        //群聊导管子
      } else {
        //私聊导管子
      }
    } else {
      //淫趴被关闭
    }
  }
}
