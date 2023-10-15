export function GetDate (s) {
    Bot.logger.mark("[寸幼萱淫趴][model/GetDate]正在获取现在时间");
    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let DateNow = s.replace(/Y/g,year).replace(/m/g,month).replace(/d/g,day);
    Bot.logger.info("获取成功，返回"+DateNow);
    return DateNow;
}