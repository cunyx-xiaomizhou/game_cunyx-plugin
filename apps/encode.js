import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
 /* 插件介绍部分 */
export class cunyx_encode extends plugin {
  constructor () {
    super({
      name:"寸幼萱encode",/*功能名称*/
      dsc:"将字符串进行encode编码",/*功能介绍*/
      event:"message",/*抄的，不知道啥玩意*/
      priority:1,/*优先级*/
      rule:[
        {
          reg:"^#?解析encode",/*命令正则匹配*/
          fnc:"_encode",/*执行方法*/
        },
        {
          reg:'^%(.*)?',
          fnc:'__encode'
        },
        {
          reg: '^#?encode',
          fnc: 'encode',
        }
      ]
    });
  }
  /*命令执行*/
  async _encode (e) {
    let text = e.msg.replace(/解析encode|#/g, '').trim();
    let encode = await fetch(`http://api.cunyx.cn/encode.php?encode=${text}`);
    encode = await encode.json();
    var msg = encode;
    e.reply('以上消息的意思是：\n\n'+msg.msg);
  }
  async __encode (e) {
    let encode = await fetch(`http://api.cunyx.cn/encode.php?encode=${e.msg}`);
    encode = await encode.json();
    var msg = encode;
    e.reply('以上消息的的意思是：\n\n'+msg.msg);
  }
  async encode (e) {
      let text = e.msg.replace(/encode|#/g, '').trim();
      var reply = encodeURI(text);
      e.reply("您生成的内容是：");
      e.reply(reply);
  }
}