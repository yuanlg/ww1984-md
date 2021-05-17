### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true
### @explicitHints 1

# Dance Floor

## Step 1
墙上的颜色似乎和地板上的颜色相同。帮助神奇女侠按照墙上的方块颜色顺序在地板上移动。这将会打开墙上的一扇暗门。

**可用的方块:**  
``||ww:神奇女侠向 <方向> 移动 <几>||`` - 神奇女侠将按照方向移动设定的步数.  
``||ww:神奇女侠向 <方向>转||`` - 神奇女侠将按照设定的方向转向.  
``||loops:重复 <几> 次||`` - 重复设定的次数  


```ghost
player.onChat("run", function () {
    ww.moveWW(Direction.Forward, 1)
    ww.turnWW(LEFT_TURN)
    for (let index = 0; index < 4; index++) {
        
    }
})
```
```template
    ww.moveWW(Direction.Forward, 1)
    ww.turnWW(RIGHT_TURN)
```
```package
minecraft-ww1984=github:yuanlg/ww1984-ts
```
