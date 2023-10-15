import CIP from './../model/index.js';
import plugin from './../../../lib/plugins/plugin.js';
//定义全局变量
let qq;
export class CunyxImpart_MyMsg extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:我的信息",
      dsc:"查看我的数据",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?淫趴信息$",fnc:"msg"}
      ]
    });
  }
  async msg (e) {
    e.reply("相应")
  }
}