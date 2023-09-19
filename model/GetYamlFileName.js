import fs from 'fs';
import path from 'path';
export function GetYamlFileName(directoryPath) {
  try {
    const fileNames = fs.readdirSync(directoryPath);
    const yamlFiles = fileNames.filter(fileName =>
      path.extname(fileName).toLowerCase() === '.yaml'
    );
    const namesWithoutExtension = yamlFiles.map(fileName =>
      path.basename(fileName, '.yaml')
    );
    return namesWithoutExtension;
  } catch (error) {
    Bot.logger.err("出错了，错误为：" + error);
    return [];
  }
}