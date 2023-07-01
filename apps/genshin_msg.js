 import plugin from '../../../lib/plugins/plugin.js';
 import fetch from 'node-fetch';
 import YAML from 'yaml';
 import fs from 'fs';
 
 let data = YAML.parse(fs.readFileSync('./plugins/cunyx-plugin/config/genshin_msg.yaml','utf-8'));
 /*世界等级为0时特殊处理*/
 let worldLevel;
 /*无签名特殊处理*/
 let signature;
 /*无完成成就特殊处理*/
 let Num;
 /* 插件介绍部分 */
export class ysxx extends plugin {
  constructor () {
    super({
      name:"原神信息",/*功能名称*/
      dsc:"查询指定uid原神信息",/*功能介绍*/
      event:"message",/*抄的，不知道啥玩意*/
      priority:2,/*优先级*/
      rule:[
        {reg:"^#?(原神)?信息",
          fnc:"msg",}
      ]
    });
  }
  /*命令执行*/
  async msg (e) {
    let uid = e.msg.replace(/原神信息|#/g, '').trim();
    if (!uid) {
      e.reply('没有要查询的对象，请严格按照以下规则发送：\n\n#原神信息263113178\n\n其中可替换部分只有uid部分，其他部分不可替换！');
    }
      let json = await fetch(`${data.api}${uid}`);
      json = await json.json();
      var genshin = json;
      let level = genshin.playerInfo.level;
      let worldLevel = genshin.playerInfo.worldLevel;
      let name = genshin.playerInfo.nickname;
      let shenyuan_ceng = genshin.playerInfo.towerFloorIndex;
      let shenyuan_jian = genshin.playerInfo.towerLevelIndex;
      let msg = genshin.playerInfo.signature;
      let num = genshin.playerInfo.finishAchievementNum;
      if (!msg) {
        let msg = '暂无签名';
        signature = msg;
      } else {
        signature = msg;
      }
      if (!num) {
          let num = '0';
          Num = num;
      } else {
          Num = num;
      }
      if (!worldLevel) {
        let n_worldLevel='0';
        worldLevel=n_worldLevel;
      }
      if (!shenyuan_jian) {
        let shenyuan = '暂未挑战';
        e.reply(`原神uid${uid}玩家信息如下：\n玩家昵称：${name}\n玩家签名：${signature}\n冒险等阶：${level}\n世界等级：${worldLevel}\n达成成就：${Num}\n深境螺旋：${shenyuan}`);
      } else {
        e.reply(`原神uid${uid}玩家信息如下：\n玩家昵称：${name}\n玩家签名：${signature}\n冒险等阶：${level}\n世界等级：${worldLevel}\n达成成就：${Num}\n深境螺旋：${shenyuan_ceng}-${shenyuan_jian}`);
      }
  }
}