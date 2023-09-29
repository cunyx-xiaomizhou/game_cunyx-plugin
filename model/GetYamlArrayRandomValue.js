import { GetYamlValue } from './GetYamlValue.js';
import { RandomArrayValueIndex } from './RandomArrayValueIndex.js';
export function GetYamlArrayRandomValue (e, FileName, Name) {
  let Array = GetYamlValue(e,FileName,Name);
  let Msg = RandomArrayValueIndex(Array);
  return Msg;
}