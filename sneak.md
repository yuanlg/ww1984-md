### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true
### @explicitHints 1

# Stealth Mission

## Step 1
通过避开激光，帮助神奇女侠在房间里移动而不触发警报。她得偷偷溜到后面把罪犯抓起来.

**可用方块:**  
``||ww:神奇女侠向 <方向> 移动 <几>||`` - 神奇女侠将按照方向移动设定的步数.  
``||ww:神奇女侠向 <方向>转||`` - 神奇女侠将按照设定的方向转向.  
``||ww:打倒罪犯 <方向>||`` - 向哪个*方向*偷偷地打倒罪犯.  
``||loops:重复 <几> 次||`` - 重复设定的次数  

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        ww.moveWW(Direction.Forward, 1)
        ww.turnWW(LEFT_TURN)
        ww.takedownGoon(Direction.Forward)
    }
})
```
```template
player.onChat("run", function () {
    ww.moveWW(Direction.Forward, 1)
    ww.turnWW(LEFT_TURN)
})
```
```package
minecraft-ww1984=github:yuanlg/ww1984-ts
```
