import { GetYamlValue } from './GetYamlValue.js';
import { RandomArrayValueIndex } from './RandomArrayValueIndex.js';
export function GetYamlArrayRandomValue (e, FileName, Name, qun_id) {
  if (qun_id&&qun_id!=='') {
    return RandomArrayValueIndex(GetYamlValue(e,FileName,Name,qun_id));
  }
  let Array = GetYamlValue(e,FileName,Name);
  let Msg = RandomArrayValueIndex(Array);
  return Msg;
}