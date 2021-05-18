### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true 
### @explicitHints 1

# 彩色光束

## Step 1
帮助神奇女侠将彩色玻璃放在光束上方，以匹配墙上显示的颜色图案。你需要告诉她移动到哪里，用什么颜色. 

**可用方块:**  
``||ww:神奇女侠向 <方向> 移动 <几>||`` - 神奇女侠将按照方向移动设定的步数.  
``||ww:神奇女侠向 <方向>转||`` - 神奇女侠将按照设定的方向转向.  
``||ww:放置 <颜色> 彩色玻璃 <方向>||`` - 按指定方向放置一块彩色彩色玻璃.  
``||loops:重复 <几> 次||`` - 重复设定的次数.  

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        ww.moveWW(Direction.Forward, 1)
        ww.turnWW(LEFT_TURN)
        ww.placeBlock(BeamsGlass.YellowStainedGlass, Direction.Forward)
    }
})
```
```template
player.onChat("run", function () {
    ww.moveWW(Direction.Forward, 3)
    ww.placeBlock(BeamsGlass.LimeStainedGlass, Direction.Right)
})
```
```package

```
