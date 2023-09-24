import fs from 'fs';
export function GetJsonArray (path,name) {
  let TextJson = fs.readFileSync(process.cwd()+'/plugins/impart_cunyx-plugin/'+name+'.json');
  //字符串转json对象，咕咕/
}