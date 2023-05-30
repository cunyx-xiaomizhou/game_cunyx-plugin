import plugin from './../../../lib/plugins/plugin.js';
import YAML from 'yaml';
import fetch from 'node-fetch';
import fs from 'fs';

let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));

export class plugin_name extends plugin {
  constructor () {
    super({
      name:"身份证核验",
      dsc:"核验一串数字是不是身份证号",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?身份证核验",fnc:"decide",}
      ]
    });
  }
  async decide (e) {
    let num = e.msg.replace(/身份证核验|#/g, '').trim();
    let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/sfz.php?qq=${data.qq}&token=${data.api}&num=${num}`);
    json = await json.json();
    var text = json;
    if (text.msg=="true") {
      e.reply(`${num}是某人的身份证号`);
    } else {
      if (text.msg=="false") {
        e.reply(`${num}不是任何人的身份证号`);
      } else {
        e.reply(text.msg);
      }
    }
  }
}