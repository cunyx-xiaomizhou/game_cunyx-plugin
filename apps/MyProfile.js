import mod from './../model/index.js';
import plugin from './../../../lib/plugins/plugin.js';
//定义全局变量
let Json;
let qun_id;
let RegRule = new RegExp("^#?("+mod.GetYamlValue("e","MyProfile","reg")+")$","g");
export class CunyxImpart_MyProfile extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:我的信息",
      dsc:"查看我的数据",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:RegRule,fnc:"myprofile"}
      ]
    });
  }
  async myprofile (e) {
     if (!e.group_id) {
      let qun_id = mod.GetBindQun(e);
      if (qun_id==null) {
        let Msg = mod.GetYamlArrayRandomValue(e,'MyProfile','NotBind');
        e.reply(Msg,true);
        return false;
      } else {
        qun_id = qun_id;
      }
    } else {
      qun_id = e.group_id;
    }
    mod.start(e,"IsPublic",qun_id);
    let BeQQ = e.msg.replace(RegRule," ").trim();
    if (/^\d{5,10}$/.test(BeQQ)==false) {
      BeQQ = e.message.filter(item => item.type == 'at')?.map(item => item?.qq);
      if (BeQQ=="") {
        BeQQ = e.user_id;
      }
    } else {
      BeQQ = BeQQ;
    }
    //尝试获取淫趴数据
    try {
      Json = JSON.parse(mod.GetTextJsonData(e,qun_if));
      e.reply("牛牛长度："+Json[BeQQ].data.long);
    } catch (err) {
      e.reply("err");
    }
  }
}