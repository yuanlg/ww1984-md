### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true 
### @explicitHints 1

# Suspicious Crates

## Step 1
帮助神奇女侠在箱子里找到丢失的那幅画。检查每一个箱子，如果她发现了丢失的画，让她打破箱子拿出画.

**可用方块:**  
``||ww:神奇女侠向 <方向> 移动 <几>||`` - 神奇女侠将按照方向移动设定的步数.  
``||ww:神奇女侠向 <方向>转||`` - 神奇女侠将按照设定的方向转向.  
``||ww:油画在这吗 <方向>||`` - 返回一个布尔值(*true* | *false*)，表示油画是否隐藏在给定的*方向*中。.  
``||ww:摧毁 <方向>||`` - 让神奇女侠打破箱子寻找画作.  
``||loops:重复 <几> 次||`` - 重复设定的次数.  
``||loops:当条件为 <boolean>执行||`` - 一直重复，直到条件不满足. 
``||logic:如果 / 否则||`` - 满足条件时就执行.  
``||logic:非 <boolean>||`` - Switches the operation of a condition. Example: *while <true>* vs. *while not <true>*  


```ghost
player.onChat("run", function () {
    ww.moveWW(Direction.Forward, 1)
    ww.turnWW(LEFT_TURN)
    if (ww.locatePainting(Direction.Forward)) {
        ww.retrievePainting(Direction.Forward)
    }
    for (let index = 0; index < 4; index++) {
        
    }
    while (!(false)) {
        
    }	
})
```
```template
player.onChat("run", function () {
    if (ww.locatePainting(Direction.Forward)) {

    }
})
```
```package
minecraft-ww1984=github:yuanlg/ww1984-md
```
