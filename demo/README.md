# 开发说明
### 简介
此文档为`寸幼萱游戏`插件的开发文档，希望开发人员阅读后开发

### 基本构造
我们要求每一个插件包体都能有以下文件：
```
README.md        (自述文件)
global.json      (全局定义文件)
add.json         (常规增加手段文件)
```
### 文件要求
#### `README.md`
<details><summary>展开/收起</summary>
对于`README.md`这个自述文件，我们希望开发者可以说明自己的：
1. 介绍
2. 指令
3. 特色
当然，你也可以完全不听取我们的建议
毕竟怎么开心怎么来嘛
</details>
 - - -
#### `add.json`
<details><summary>展开/收起</summary>
文件`add.json`是常规增加手段配置文件<br/>
在这个游戏里，玩家最经常使用的增加xxx量的方法<br/>
我在[demo](/demo/add.json)开发实例中配置了详细的注释<br/>
在实际开发中，完全可以不写注释<br/>
就比如是这样的：
```json
{
    "config": {
        "reg": "example",
        "name": "示例",
        "default": {
            "mix": 1,
            "max": 2,
            "cd": 500000,
            "reply": {
                "success": [
                    "..."
                ],
                "in_cd": [
                    "..."
                ]
            }
        }
    }
}
```
在这里你也可以选择加亿点点的`后门`，比如这样
```json
{
    "config": {
        "reg": "example",
        "name": "示例"
        "default": {
            "mix": 100,
            "max": 300,
            "cd": 3000000,
            "reply": {
                "success": [
                    "..."
                ],
                "in_cd": [
                    "..."
                ]
            }
        },
        "单独开后门的群的群号": {
            "xxx": "单独开后门的项"
        }
    }
}
```
这样写的话会优先读取开启后门的配置项<br/>
若没有单独开启后门才会使用默认项
</details>
 - - -
### `global.json`
#### 正在编写，敬请期待