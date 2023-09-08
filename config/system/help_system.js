/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 如需自定义配置请复制修改上一级help_default.js
*
* */
import fs from 'fs';
let data = JSON.parse(fs.readFileSync('./package.json'));
export const helpCfg = {
  title: '寸幼萱帮助',
  subTitle: data.name + ' && cunyx-plugin',
  columnCount: 3,
  colWidth: 265,
  theme: 'all',
  themeExclude: ['default'],
  style: {
    fontColor: '#ceb78b',
    descColor: '#eee',
    contBgColor: 'rgba(6, 21, 31, .5)',
    contBgBlur: 4,
    headerBgColor: 'rgba(6, 21, 31, .4)',
    rowBgColor1: 'rgba(6, 21, 31, .2)',
    rowBgColor2: 'rgba(6, 21, 31, .35)'
  },
  bgBlur: false
}

export const helpList = [{
  group: '管理员可用功能',
  auth: 'master',
  list: [{
    icon: 85,
    title: '#开启/关闭淫趴',
    desc: '更改指定群聊淫趴状态'
  }, {
    icon: 32,
    title: '#寸幼萱淫趴更新',
    desc: '更新淫趴插件，获取新功能'
  }, {
    icon: 35,
    title: '#数据迁移',
    desc: '将寸幼萱插件内的数据迁移至淫趴插件<br/>请不要多次使用'
  }]
}];

export const isSys = true
