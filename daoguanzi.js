import plugin from './../../../lib/plugins/plugin.js';
import { GetYamlValue } from './../model/GetYamlValue.js';
export class cunyx_impart_bind extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:导管子",
      dsc:"让用户开心的去导管子吧！",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?"+GetYamlValue(e,"daoguanzi","reg")+"$",fnc:"daoguanzi"}
      ]
    });
  }
  async daoguanzi (e) {
    if (GetYamlValue(e,"data","IsBind")==true) {
      try {
        //读取Bot.uin的淫趴信息
      } catch (err) {
        //没有淫趴数据文件
      }
    } else {
      try {
        //读取all信息
      } catch (err) {
        //没有淫趴数据文件
      }
    }
    /*
    if (!)
    */
  }
}