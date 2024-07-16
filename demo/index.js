import fs from 'fs';
import { config } from './config.js';
const plugin_name = {
    en: 'impart_cunyx-plugin',
    cn: '寸幼萱淫趴'
};
const plugin_path = process.cwd()+'/plugins/'+plugin_name.en;
let packageJson = JSON.parse(fs.readFileSync(`${plugin_path}/package.json`, 'utf8'));
const plugin_version = packageJson.version;
let icp_ = {
    name: plugin_name,
    path: plugin_path,
    version: plugin_version,
    config: config
};
export default icp_;