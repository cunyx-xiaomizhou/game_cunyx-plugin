import plugin from './../../../lib/plugins/plugin.js';
import { GetYamlValue } from './../model/GetYamlValue.js';
export class plugin_name extends plugin {
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
    /*
      需要一个判断是否有数据的函数，等我，我先去写
    */
  }
}
