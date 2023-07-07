import plugin from './../../../lib/plugins/plugin.js';
import puppeteer from 'puppeteer';
import { segment }from 'oicq';
import fs from 'fs';

export class cunyx_help extends plugin {
  constructor () {
    super({
      name:"寸幼萱帮助",
      dsc:"获取寸幼萱帮助",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?(c|C|寸|村)(u|U)?(n|N)?(y|Y|幼|优)(x|X|萱|选)(插件)?使用说明",fnc:"help"},
        {reg:"^#?(c|C|寸|村)(u|U)?(n|N)?(y|Y|幼|优)(x|X|萱|选)帮助",fnc:"help_index"},
        {reg:"^#?((c|C|寸|村)(u|U)?(n|N)?(y|Y|幼|优)(x|X|萱|选))?(淫|银|阴)(趴|扒|啪|爬)帮助",fnc:"help_impact"},
        {reg:"^#?((c|C|寸|村)(u|U)?(n|N)?(y|Y|幼|优)(x|X|萱|选))设置",fnc:"help_install"}
      ]
    });
  }
  async help (e) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://gitee.com/cunyx/cunyx-plugin/blob/master/README.md');
    await page.screenshot({
      path: process.cwd()+`/plugins/cunyx-plugin/data/README.png`,
      fullPage: true
    });
    await browser.close();
    await e.reply([segment.image(process.cwd()+`/plugins/cunyx-plugin/data/README.png`)]);
  }
  async help_index (e) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://gitee.com/cunyx/cunyx-plugin/blob/master/HELP/INDEX.md');
    await page.screenshot({
      path: process.cwd()+`/plugins/cunyx-plugin/HELP/INDEX.png`,
      fullPage: true
    });
    await browser.close();
    await e.reply([segment.image(process.cwd()+`/plugins/cunyx-plugin/HELP/INDEX.png`)]);
  }
  async help_impact (e) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://gitee.com/cunyx/cunyx-plugin/blob/master/HELP/IMPACT.md');
    await page.screenshot({
      path: process.cwd()+`/plugins/cunyx-plugin/HELP/IMPACT.png`,
      fullPage: true
    });
    await browser.close();
    await e.reply([segment.image(process.cwd()+`/plugins/cunyx-plugin/HELP/IMPACT.png`)]);
  }
  async help_install (e) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://gitee.com/cunyx/cunyx-plugin/blob/master/HELP/INSTALL.md');
    await page.screenshot({
      path: process.cwd()+`/plugins/cunyx-plugin/HELP/INSTALL.png`,
      fullPage: true
    });
    await browser.close();
    await e.reply([segment.image(process.cwd()+`/plugins/cunyx-plugin/HELP/INSTALL.png`)]);
  }
}