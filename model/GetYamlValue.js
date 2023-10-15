import YAML from 'yaml';
import fs from 'fs';
export function GetYamlValue (e, FileName, Name, qun_id) {
  Bot.logger.mark("[寸幼萱淫趴][model/GetYamlValue]开始调用获取控制面板值函数...");
  Bot.logger.mark("目标文件名："+FileName+'.yaml');
  let data = YAML.parse(fs.readFileSync('./plugins/impart_cunyx-plugin/config/' + FileName +'.yaml','utf-8'));
  try {
    Bot.logger.mark("正在读取群单独配置....");
    if (qun_id) {
      let value = data[qun_id][Name];
      if (Array.isArray(value)) {
        Bot.logger.info("获取成功，类型：数组；\n返回："+JSON.stringify(value));
        return value;
      }
      let Value = value.replace(/{or}/g,"|");
      Bot.logger.info("获取成功，返回："+Value);
      return Value;
    } else {
      let value = data[e.user_id][Name];
      if (Array.isArray(value)) {
        Bot.logger.info("获取成功，类型：数组；\n返回："+JSON.stringify(value));
        return value;
      }
      let Value = value.replace(/{or}/g,"|");
      Bot.logger.info("读取成功，返回："+Value);
      return Value;
    }
  } catch (err) {
    Bot.logger.mark("群单独配置获取失败，正在读取默认配置...");
    try {
      let value = data.def[Name];
      if (Array.isArray(value)) {
        Bot.logger.info("群单独配置读取成功，类型：数组；\n返回："+value);
        return value;
      }
      let Value = value.replace(/{or}/g,"|");
      Bot.lohger.info("群单独配置读取成功，返回："+Value);
      return Value;
    } catch (err) {
      Bot.logger.mark("群单独配置读取失败，正在直接读取....");
      try {
        let value = data[Name];
        if (Array.isArray(value)) {
          Bot.logger.info("直接读取成功，类型：数组；返回：\n"+value);
          return value;
        }
        let Value = value.replace(/{or}/,"|");
        Bot.logger.info("直接读取成功，返回："+Value);
        return Value;
      } catch (err) {
        Bot.logger.error("读取失败，报错如下：");
        Bot.logger.error(err);
        e.reply("程序在运行时出现错误，报错已打印至控制台");
        Bot.logger.error("返回false，程序终止运行");
        return false;
      }
    }
  }
}
/** 
  try {
    Bot.logger.mark("尝试读取群单独配置....");
    if (qun_id) {
      let value = data[qun_id][Name];
      if (Array.isArray(value)) {
        Bot.logger.info("读取群配置成功，返回"+JSON.stringify(value));
        return value;
      } else {
        let Value = value.replace(/{or}/g,"|");
        Bot.logger.info("读取群配置成功，返回"+Value);
        return Value;
      } 
    }
  } catch (err) {
    try {
      let value = data[e.group_id][Name];
      if (Array.isArray(value)) {
        Bot.logger.info("读取群配置成功，返回"+JSON.stringify(value));
        return value;
      } else {
        let Value = value.replace(/{or}/g,"|");
        Bot.logger.info("读取群配置成功，返回"+Value);
        return Value;
      }
    } catch (err) {
      Bot.logger.mark("读取群配置失败，尝试读取默认配置");
      try {
        let value = data.def[Name];
        if (Array.isArray(value)) {
          Bot.logger.info("默认值读取成功，返回"+JSON.stringify(value));
          return value;
        } else {
          let Value = value.replace(/{or}/g,"|");
          Bot.logger.info("默认值读取成功，返回"+Value);
          return Value;
        }
      } catch (err) {
        try {
          Bot.logger.mark("默认值读取失败，正在使用常规读取方式...");
          let value = data[Name];
          if (Array.isArray(value)) {
            Bot.logger.info("读取成功，返回"+JSON.stringify(value));
            return value;
          } else {
            let Value = value.replace(/{or}/g,"|");
            Bot.logger.info("读取成功，返回"+Value);
            return Value;
          }
        } catch (err) {
          Bot.logger.error("读取失败！错误如下：");
          Bot.logger.error(err);
          e.reply("程序出错，报错已打印至控制台，请联系相关人员处理",true);
          Bot.logger.error("返回false，程序终止运行");
          return false;
        }
      }
    }
  }
}
*/