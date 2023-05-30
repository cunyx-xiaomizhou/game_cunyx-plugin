import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import { segment } from 'oicq';
import puppeteer from 'puppeteer';
import YAML from 'yaml';
import fs from 'fs';

let api_data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/cunyx_api.yaml','utf-8'));
let config_data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/ikun.yaml','utf-8'));

let qq;

export class ikun_card extends plugin {
  constructor () {
    super({
      name:"ikun身份证",
      dsc:"获取我的ikun身份证",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?ikun",fnc:"ikun",}
      ]
    });
  }
  async ikun(e) {
    let qq = e.msg.replace(/ikun|#/g, '').trim();
    if (qq=='') {
      qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq);
      if (qq=='') {
        qq=e.user_id;
      }
    }
    let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/ikun.php?qq=${api_data.qq}&token=${api_data.api}&qid=${qq}&nian_low=${config_data.nian_low}&nian_height=${config_data.nian_height}&yue_low=${config_data.yue_low}&yue_height=${config_data.yue_height}&ri_low=${config_data.ri_low}&ri_height=${config_data.ri_height}`);
    json = await json.json();
    var text = json;
    let msg = text.msg;
    if (msg.charAt(0)==='h') {
      const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
      const page = await browser.newPage();
      await page.goto(`${text.msg}`);
      await page.setViewport({
        width: 1264,
        height: 800
      });
      await page.screenshot({
        path: process.cwd()+`/plugins/cunyx-plugin/resources/img/ikun/${qq}.png`,
        fullPage: true
      });
      await browser.close();
      await e.reply([segment.image(process.cwd()+`/plugins/cunyx-plugin/resources/img/ikun/${qq}.png`)]);
    } else {
      e.reply(msg);
    }
  }
}