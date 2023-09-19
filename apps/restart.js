import plugin from './../../../lib/plugins/plugin.js';
export class impart_cunyx_plugin_restart extends plugin {
  constructor () {
    super({
      name:"寸幼萱淫趴:重载设置",
      dsc:"删除控制面板重新初始化以获得新数据",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?((c|C|寸|村)(u|U)?(n|N)?(y|Y|幼|优)(x|X|萱|选))?((淫|银|阴)(趴|扒|啪|爬))?查(看|询)控制(台|面板|文件)$",fnc:"seekconfig"},
        {reg:"^#?((c|C|寸|村)(u|U)?(n|N)?(y|Y|幼|优)(x|X|萱|选))?((淫|银|阴)(趴|扒|啪|爬))?重(置|拉|载)控制(台|面板|文件)(.*)",fnc:"rm"}
      ]
    });
  }
}