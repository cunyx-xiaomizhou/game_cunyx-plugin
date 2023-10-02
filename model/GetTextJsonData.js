export function GetTextJsonData (e,qun_id) {
  Bot.logger.mark("[寸幼萱淫趴][model/GetJsonData]开始获取数据文件...");
  if (GetYamlValue(e,"data","IsBind",qun_id)==true) {
    dir = "all";
  } else {
    dir = Bot.uin;
  }
  try {
    let Json = fs.readFileSync("./plugins/impart_cunyx-plugin/data/"+dir+"/"+qun_id+".json");
    Bot.logger.info("获取成功，已返回信息");
    return Json;
  } catch (err) {
    Bot.logger.error("获取失败，错误如下：");
    Bot.logger.error(err);
    e.reply("程序运行错误，错误已打印至控制台，请联系相关人员处理",true);
    Bot.logger.error("程序终止运行");
    return flase;
  }
}