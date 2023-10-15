 import fs from 'fs';
import { start } from './../model/start.js';
import { random } from './../model/random.js';
import { GetDate } from './../model/GetDate.js';
import { GetBindQun } from './../model/GetBindQun.js';
import plugin from './../../../lib/plugins/plugin.js';
import { LooseNumber } from './../model/LooseNumber.js';
import { GetYamlValue } from './../model/GetYamlValue.js';
import { GetTextJsonData } from './../model/GetTextJsonData.js';
import { PostTextJsonData } from './../model/PostTextJsonData.js';
import { GetYamlArrayRandomValue } from './../model/GetYamlArrayRandomValue.js';
//定义全局变量
let BeQQ;
let Json;
let st_cd;
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
    start(e,"IsPublic",qun_id);
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
    let BeQQ = e.msg.replace(RegRule," ").trim();
    if (/^\d{5,10}$/.test(BeQQ)==false) {
      BeQQ = e.message.filter(item => item.type == 'at')?.map(item => item?.qq);
      if (BeQQ=="") {
        BeQQ = e.user_id;
      }
    } else {
      BeQQ = BeQQ;
    }
    if (GetYamlValue(e,'daoguanzi','cond')==true) {
      let Json = JSON.parse(GetTextJsonData(e,qun_id));
      try {
        st_cd = Json[BeQQ]["cd"]["daoguanzi"];
      } catch (err) {
        st_cd = 0;
      }
      if (Date.now()<st_cd) {
        let Msg = GetYamlArrayRandomValue(e,"daoguanzi","cd_language",qun_id).replace(/{cd}/,(st_cd - Date.now())/1000);
        e.reply(Msg,true);
        return false;
      }
      try {
        Json[BeQQ]["data"]["long"] = Json[BeQQ]["data"]["long"] + Number;
      } catch (err) {
        Json[BeQQ] = {};
        Json[BeQQ]["data"] = {};
        Json[BeQQ]["data"]["long"] = Number;
      }
      let Day = GetDate("Y-m-d");
      try {
        Json[BeQQ]["data"]["date"][Day]["daoguanzi"]["times"] = Json[BeQQ]["data"]["date"][Day]["daoguanzi"]["times"] + 1;
      } catch (err) {
        try {
         let test = Json[BeQQ]["data"]["date"][Day];
        } catch (err) {
          Json[BeQQ]["data"]["date"] = {};
        }
        try {
         let test = Json[BeQQ]["data"]["date"][Day]["daoguanzi"];
        } catch (err) {
          Json[BeQQ]["data"]["date"][Day] = {};
        }
        try {
          let test = Json[BeQQ]["data"]["date"][Day]["daoguanzi"]["times"];
        } catch (err) {
          Json[BeQQ]["data"]["date"][Day]["daoguanzi"] = {};
        }
        Json[BeQQ].data.date[Day].daoguanzi.times = 1;
      }
      try {
        Json[BeQQ].data.date[Day].daoguanzi.add = Json[BeQQ].data.date[Day].daoguanzi.add + Number;
      } catch (err) {
        Json[BeQQ].data.date[Day].daoguanzi.add = Number;
      }
      try {
        Json[BeQQ]["cd"]["daoguanzi"] = Date.now() + (cd * 1000);
      } catch (err) {
        Json[BeQQ]["cd"] = {};
        Json[BeQQ]["cd"]["daoguanzi"] = Date.now() + (cd * 1000);
      }
      let PostCond = PostTextJsonData(e,qun_id,Json);
      if (PostCond==true) {
        let Msg = GetYamlArrayRandomValue(e,"daoguanzi","win_language",qun_id);
        e.reply(Msg.replace(/{add}/,Number),true);
      } else {
        e.reply("【返回】"+PostCond,true);
      }
    } else {
      e.reply(GetYamlArrayRandomValue(e,"daoguanzi","close",qun_id),true);
      return false;
    }
  }
}
