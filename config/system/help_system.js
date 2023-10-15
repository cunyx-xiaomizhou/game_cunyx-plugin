/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 如需自定义配置请复制修改上一级help_default.js
*
* */
import fs from 'fs';
let data = JSON.parse(fs.readFileSync('./package.json'));
export const helpCfg = {
  title: '寸幼萱淫趴帮助',
  subTitle: data.name + ' && impart_cunyx-plugin',
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
  group: '* 控制面板路径为'+process.cwd()+'/plugins/impart_cunyx-plugin/config',
  auth: 'master',
  group: '* 请不要修改def_config文件夹下的内容，否则更新会报错',
  auth: 'master',
  group: '系统指令',
  list: [{
    icon: 1,
    title: '#淫趴绑定[本群|群号]' ,
    desc: '绑定群聊，让你私聊也可以色色'
  },{
    icon: 5,
    title: '#淫趴面板',
    desc: '查看我的各种信息'
  }]},{
  group: '淫趴游戏功能',
  list: [{
    icon: 3,
    title: '#导管子',
    desc: '运动运动，强身健体~~'
  }]},{
  group: '管理员可用功能',
  auth: 'master',
  list: [{
    icon: 85,
    title: '#查看控制文件',
    desc: '查看可以重新拉取的控制文件'
  }, {
    icon: 32,
    title: '#寸幼萱淫趴更新',
    desc: '更新淫趴插件，获取新功能'
  }, {
    icon: 35,
    title: '#重载控制文件[文件名]',
    desc: '重新拉取文件以获得新文案'
  }]
}];

export const isSys = true
