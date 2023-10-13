import plugin from './../../../lib/plugins/plugin.js';
export class CunyxImpart_profile extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:我的面板",
      dsc:"查看我的数据",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?$",fnc:"profile"}
      ]
    });
  }
  //我放鸽子怎么了
}