import plugin from '../../../lib/plugins/plugin.js';
export class plugin_name extends plugin {

  constructor() {
    super({
      name: "寸幼萱插件:随机图片",
      dsc: "随机从API中抽取一张图片",
      event: "message", 
      priority: 1, // 优先级
      rule: [
        {
          reg: "^#?(随机爱坤|随机ikun|小黑子|随机坤图)",
          fnc: "ikun",
        },
        {
          reg: "^#?(op|原批|玩原神玩的)",
          fnc: "op",
        },
        {
          reg: "^#?随机原神(表情包|小表情|表情)",
          fnc: "Genshin",
        },
        {
          reg: "^#?随机(纳西妲表情包|纳西妲)",
          fnc: "Nahida",
        },
        {
          reg: "^#?随机(白圣女|圣女|塞西莉亚|Cecilia|cecilia)",
          fnc: "Cecilia",
        },
        {
          reg: "^#?随机真寻(表情包)?",
          fnc: "zhenxun",
        },
        {
          reg: "^#?(全彩|动漫)?白圣女表情包",
          fnc: "Cecilia_Anime",
        },
      ],
    });
  }

  // ikun坤图
  async ikun(e) {
    this.e.reply(segment.image(`http://api.dengfenglai.cloud/ikun`))
    return true
    }
  // 原神怎么你了
  async op(e) {
    this.e.reply(segment.image(`http://api.dengfenglai.cloud/op`))
    return true
    }
  // 随机原神表情包
  async Genshin(e) {
    this.e.reply(segment.image(`http://api.dengfenglai.cloud/Genshin`))
    return true
    }
  // 纳西妲表情包
    async Nahida(e) {
    this.e.reply(segment.image(`http://api.dengfenglai.cloud/Nahida`))
    return true
    }
  // 白圣女
    async Cecilia(e) {
    this.e.reply(segment.image(`http://api.dengfenglai.cloud/Cecilia`))
    return true
    }
  // 真寻
    async zhenxun(e) {
    this.e.reply(segment.image(`http://api.dengfenglai.cloud/zhenxun`))
    return true
    }
  // 彩色白圣女
    async Cecilia_Anime(e) {
    this.e.reply(segment.image(`http://api.dengfenglai.cloud/Cecilia_Anime`))
    return true
    }
}