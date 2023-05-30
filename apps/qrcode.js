/*作者的话*/
/*
 *这个js是自己做的
 *使用的是自己研发的PHP
 *如果做的不好请见谅
 *网页版：https://qrcode.cunyx.cn/
 *调用格式： *http://qrcode.cunyx.cn/qr.php?text=生成内容&size=生成大小(正整数,建议200)
 *前两行好难，一点不懂，就抄了一下其他js插件。
 */
import plugin from './../../../lib/plugins/plugin.js';
import { segment } from 'oicq';
 /* 插件介绍部分 */
export class cunyx_qr_code extends plugin {
  constructor () {
    super({
      name:"寸幼萱二维码生成",/*功能名称*/
      dsc:"专业生成二维码的功能",/*功能介绍*/
      event:"message",/*抄的，不知道啥玩意*/
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?生成二维码",fnc:"qrcode",}
      ]
    });
  }
  /*命令执行*/
  async qrcode (e) {
    let text = e.msg.replace(/生成二维码|#/g, '').trim();
    let msg = [
      "您生成的内容是" + text + "。\n您的二维码如下：",
      segment.image(`https://qrcode.cunyx.cn/qr.php?text=${text}&size=200`),
      "QQ暂不支持识别非链接内容，其他内容正常识别",
    ];
    e.reply(msg);
  }
}