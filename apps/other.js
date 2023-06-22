import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import { segment } from 'oicq';
import puppeteer from 'puppeteer';
import part from 'path';
import YAML from 'yaml';
import fs from 'fs';

export class cunyx_plugin_other extends plugin {
  constructor () {
    super({
      name:"其他功能",
      dsc:"一些小功能",
      event:"message",
      priority:-9999999,/*优先级*/
      rule:[
        {reg:"^#?(寸幼萱|(c|C)(u|U)?(n|N)?(y|Y)(x|X))(用户)?协议",fnc:"user_protocol",}
      ]
    });
  }
  async user_protocol (e) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://plugin.cunyx.cn/user_protocol.php');
    await page.screenshot({
        path : process.cwd()+'/plugins/cunyx-plugin/data/user_protocol.png',
        fullPage: true
      });
    await browser.close();
    e.reply(segment.image(process.cwd()+'/plugins/cunyx-plugin/data/user_protocol.png'));
  }
}