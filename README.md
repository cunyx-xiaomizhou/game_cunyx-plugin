</div>
 <h1>寸幼萱插件cunyx-plugin</h1>
</div>

#### 介绍
云崽机器人的寸幼萱插件(cunyx-plugin)

寸幼萱插件是一个Yunzai-Bot的扩展插件，具体功能请见下方`使用指令`板块！

<div>
<div align="center">

[![](https://img.shields.io/badge/cunyx-plugin-LightPink)](https://gitee.com/cunyx/cunyx-plugin)
[![](https://img.shields.io/badge/Author-寸幼萱-DeepSkyBlue)](https://gitee.com/cunyx)
<a href='https://gitee.com/cunyx/cunyx-plugin/stargazers'><img src='https://gitee.com/cunyx/cunyx-plugin/badge/star.svg?theme=dark' alt='star'></img></a>
<a href='https://gitee.com/cunyx/cunyx-plugin/members'><img src='https://gitee.com/cunyx/cunyx-plugin/badge/fork.svg?theme=dark' alt='fork'></img></a>

[![访问量](https://profile-counter.glitch.me/cunyx-plugin/count.svg)](https://gitee.com/cunyx/cunyx-plugin.git)

</div>
</div>

#### 安装教程

1.  进入云崽根目录
```
cd Yunzai-Bot
```

2.  拉取项目
```
git clone https://gitee.com/cunyx/cunyx-plugin.git ./plugins/cunyx-plugin/
```

3.  更改名称，生效控制面板
```
cd ./plugins/cunyx-plugin && mv def_config config
```

4.  重启机器人
```
cd ~ && cd Yunzai-Bot && node app
```
#### 使用指令
|命令|功能|备注|是否需要token(划线代表无token可用，有token使用更佳)|
|-----|-----------|--------------|---|
|`#寸幼萱api`|查看token剩余可用次数| |✔|
|`#寸幼萱检查更新`|检查寸幼萱插件是否有新版本|非主人也可以使用|✘|
|`#ikun`|生成专属ikun身份证|后面可以不填，也可以填写QQ号或者at群成员|✔|
|`#前瞻`|获取本期《原神》前瞻直播主要内容|也可以使用`#原神前瞻`指令触发| - |
|`#兑换码`|获取本期《原神》前瞻直播兑换码|也可以使用`#原神兑换码`指令触发| - |
|`#星铁前瞻`|获取本期《崩坏：星穹铁道》前瞻直播主要内容|该指令的`星铁`不能替换为任何其他别名| - |
|`#星铁兑换码`|获取本期《崩坏：星穹铁道》前瞻直播兑换码|该指令的`星铁`不能替换为任何其他别名| - |
|`#原神信息`+`uid`|查询《原神》指定账号信息|uid部分必填，且正确填写|✘|
|`#星铁信息`+`uid`|查询《崩坏：星穹铁道》指定账号信息|uid部分必填，且正确填写；星铁信息缺少像enka这样的api，查询信息可能不全|✘|
|`#身份证核验`+`一串数字`|判断一串数字是否为身份证号|身份证号必填|✘|
|`#生成二维码`+`生成内容`|将内容生成为二维码|QQ如果想要识别二维码，要求生成内容必须为`http`或`https`开头的链接，否则无法识别|✘|
|`#encode`+`转换内容`|将一串字符串转码encode格式| |✘|
|`#解析encode`+`解析内容`|把一串encode编码还原至明文|可以直接将需要解码的内容发送给机器人|✘|

#### token相关
1.   每个人都有2000额度的免费token
2.   云崽插件js作者视情况可获得2000~10000份免费token
3.   云崽插件plugin作者视情况获得5000~20000份免费token
4.   以上三条福利不可重复使用，每人仅能领取符合条件的其中一份
5.   token领取请进群`786034611`私信小米粥(一般晚上回复)
6.   token自助续费页面正在编写，若需续费请联系小米粥
7.   首次续费需要免费获取使用量超过50%以上，否则不予续费
8.   token填写目录`./plugins/cunyx-plugin/config/cunyx_api.yaml`

####  特别鸣谢
|昵称|贡献内容|联系方式|
|---------|------------------|----------|
|@pluto|插件早期参与测试|贡献者未同意公开|
|@二羊妮|插件新功能测试|QQ号：`52484517`|
| [@地球生物](https://gitee.com/jiang-zhitao-1)|`index.js`报错指导及`update.js`(开发中内容)的写法思路提供|暂未取得贡献者同意|
| [@小雨](https://gitee.com/SHIKEAIXY)|提供了`README.md`的访问量代码|QQ号：`536606294`|
