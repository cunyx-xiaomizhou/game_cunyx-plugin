import plugin from './../../../lib/plugins/plugin.js';
import { GetYamlFileName } from './../model/GetYamlFileName.js';
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
  async seekconfig (e) {
    if (!e.isMaster) {
      e.reply("只有我的主人可以查看哦~",true);
      return;
    }
    let array = GetYamlFileName('./plugins/impart_cunyx-plugin/config');
    let long = array.length;
    let Msg = "";
    for (let i=0;i<long;i++) {
      Msg = Msg + array[i] + "\n";
    }
    e.reply("可供重置的文件如下：\n\n"+Msg+"\n重置某面板请发送【#寸幼萱淫趴重载配置文件 + 上方的文件名】进行重置，将在重启后生效",true);
  }
  async rm (e) {
    if (!e.isMaster) {
      e.reply("只有我的主人可以重置哦~",true);
      return;
    }
    let File = e.msg.replace(/((c|C|寸|村)(u|U)?(n|N)?(y|Y|幼|优)(x|X|萱|选))?((淫|银|阴)(趴|扒|啪|爬))?重(置|拉|载)控制(台|面板|文件)/,"");
    try {
      fs.unlink('./plugins/import_cunyx-plugin/config/'+File+".yaml");
      e.reply("重置完成，将在下次重启后生效",true);
    } catch (err) {
      e.reply("重置失败，请将本消息完整截图发给机器人主人或Nodejs编程者\n\n"+err);
    }
  }
}