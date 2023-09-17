import fs from 'fs';
export function bind (e,qq_id,qun_id) {
  let JsonText = fs.readFileSync('./plugins/impart_cunyx-plugin/data/bind.json');
  let Json = JSON.parse(JsonText);
  Json[qq_id] = qun_id;
  let NewJson = JSON.stringify(Json);
  fs.writeFile('./plugins/impart_cunyx-plugin/data/bind.json', NewJson, (err) => {
    if (err) throw err;
    e.reply("绑定成功！",true);
  });
}