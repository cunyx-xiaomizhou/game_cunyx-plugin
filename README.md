# 寸幼萱插件

#### 介绍
云崽机器人寸幼萱插件(cunyx-plugin)的Gitee仓库地址

#### 安装教程

1.  进入云崽根目录
```
cd Yunzai-Bot
```

2.  拉取项目
```
git clone https://gitee.com/cunyx/cunyx-plugin.git ./plugin/cunyx-plugin/
```
#### 使用指令
|命令|功能|备注|
|-----|-----------|--------------|
|`#寸幼萱api`|查看token剩余可用次数| |
|`#寸幼萱检查更新`|检查寸幼萱插件是否有新版本|非主人也可以使用|
|`#ikun`|生成专属ikun身份证|后面可以不填，也可以填写QQ号或者at群成员|
|`#原神信息`+`uid`|查询原神指定账号信息|uid部分必填，且正确填写|
|`#星铁信息`+`uid`|查询崩坏：星穹铁道指定账号信息|uid部分必填，且正确填写；星铁信息缺少像enka这样的api，查询信息可能不全|
|`#身份证核验`+`一串数字`|判断一串数字是否为身份证号|身份证号必填|