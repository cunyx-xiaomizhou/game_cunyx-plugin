import CI_P from './../model/index.js';
import plugin from './../../../lib/plugins/plugin.js';
//定义全局变量
let qq;
let RegRule = new RegExp("^#?("+CI_P.GetYamlValue("e","system","reg")+")$","g");
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
    e.reply("框架测试成功");
  }
}