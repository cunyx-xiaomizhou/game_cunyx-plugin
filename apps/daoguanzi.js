import fs from 'fs';
import { start } from './../model/start.js';
import { random } from './../model/random.js';
import { GetBindQun } from './../model/GetBindQun.js';
import plugin from './../../../lib/plugins/plugin.js';
import { LooseNumber } from './../model/LooseNumber.js';
import { GetYamlValue } from './../model/GetYamlValue.js';
import { GetTextJsonData } from './../model/GetTextJsonData.js';
import { GetYamlArrayRandomValue } from './../model/GetYamlArrayRandomValue.js';
//定义全局变量
let BeQQ;
let Json;
let qun_id;
let Number;
let RegRule = new RegExp("^#?("+GetYamlValue("e","daoguanzi","reg")+")$","g");
export class CunyxImpart_daoguanzi extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:导管子",
      dsc:"让用户开心的导管子吧！",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:RegRule,fnc:"daoguanzi"}
      ]
    });
  }
  async daoguanzi (e) {
    e.reply("阿巴巴巴",true);
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
    let heigh = GetYamlValue(e,"daoguanzi","add_hight",qun_id);
    let cd = GetYamlValue(e,"daoguanzi","cd",qun_id);
    let Num = random(low,heigh);
    //计算增长值
    if (Num==heigh) {
      Number = Num;
    } else {
      Number = Num + LooseNumber(random(0,999),3)/1000;
    }
    //提取用户QQ号
    let BeQQ = e.msg.replace(RegRule,"").trim();
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
      let Json = JSON.parse(GetTextJsonData(e,qun_id));
      try {
        Json[BeQQ]["data"]["long"] = Json[BeQQ]["data"]["long"] + Number;
      } catch (err) {
        Json[BeQQ]["data"]["long"] = Number;
      }
      Json[BeQQ]["cd"]["daoguanzi"] = time() + (cd * 1000);
      /**
       * @这里写一个提交JSON的函数
       * @好难啊，不想写插件
       */
      e.reply("代码状态正常，具体内容正在更新");
    } else {
      e.reply(GetYamlArrayRandomValue(e,"daoguanzi","close"),true);
      return false;
    }
  }
}
