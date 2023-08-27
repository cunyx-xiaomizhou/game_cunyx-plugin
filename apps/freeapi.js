import plugin from './../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
export class cunyx_freeapi extends plugin {
  constructor () {
    super({
      name:"免费api",
      dsc:"寸幼萱提供的免费api功能",
      event:"message",
      priority:1,/*优先级*/
      rule:[
        {reg:"^#?舔狗日记$",fnc:"dog"},
        {reg:"^#?(来(一|亿)碗|心(里|灵))?毒鸡汤$",fnc:"soul"},
        {reg:"^#?(随机)?(名人)?名言",fnc:"mingyan"},
        {reg:"^#?(随机)?(古)?诗词",fnc:"shici"}
      ]
    });
  }
  async dog (e) {GetApi(e,"dog")}
  async soul (e) {GetApi(e,"soul")}
  async mingyan (e) {GetApi(e,"mingyan")}
  async shici (e) {GetApi(e,"shici")}
}
async function GetApi (e,name) {
  try {
    let json = await fetch(`http://api.cunyx.cn/Yunzai-Bot/freeapi.php?name=${name}&uin=${Bot.uin}&qid=${e.user_id}`);
    json = await json.json();
    var text = json;
    if (text.cond == "normal") {
      e.reply(text.msg,true);
    } else {
      e.reply("调用失败，因为：\n"+text.msg,true);
    }
  } catch (err) {
    e.reply("我也不知道为什么，反正调用失败了，原因如下：\n"+err);
  }
}