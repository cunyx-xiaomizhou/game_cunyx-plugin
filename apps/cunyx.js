import plugin from './../../../lib/plugins/plugin.js';
import { segment } from 'oicq';
import fetch from 'node-fetch';

export class cunyx extends plugin {
  constructor () {
    super({
      name:"随机寸幼萱/小米粥",
      dsc:"随机发送寸幼萱/小米粥表情包",
      event:"message",
      priority:9999,/*优先级*/
      rule:[
        {reg:"^#?(.*)(寸|村|c|C)(u|U)?(n|N)?(幼|优|y|Y)(萱|选|x|X)(.*)",fnc:"cunyx"},
        {reg:"^#?(.*)?(小|修|x|X)?(米|咪|迷|m|M)(粥|周|洲|州|z|Z)(.*)",fnc:"xmz"}
      ]
    });
  }
  async cunyx (e) {
    let json = await fetch(`https://plugin.cunyx.cn/cunyx-plugin/cunyx.php`);
    json = await json.json();
    var text = json;
    let msg =  segment.image(text.msg);
    e.reply(msg);
  }
  async xmz (e) {
    let json = await fetch(`https://plugin.cunyx.cn/xmz.php`);
    json = await json.json();
    var text = json;
    let msg = segment.image(text.msg);
    e.reply(msg);
  }
}