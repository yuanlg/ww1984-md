### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true
### @explicitHints 1

# Hidden in Plain Sight

## Step 1
策划抢劫的小偷藏在人群中。帮助神奇的女人检查每个人，找出谁是小偷，然后抓住他得到最后的绘画作品。

**可用方块:**  
``||ww:神奇女侠向 <方向> 移动 <几>||`` - 神奇女侠将按照方向移动设定的步数.  
``||ww:神奇女侠向 <方向>转||`` - 神奇女侠将按照设定的方向转向.  
``||ww:此人是小偷吗<方向>||`` - 返回一个boolean值（*true*|*false*），应方向的人是否是小偷.  
``||ww:真言套索 <方向>||`` - 神奇女侠用她的真言套索对付小偷.  
``||loops:重复 <几> 次||`` - 重复设定的次数.  
``||loops:当条件为 <boolean>执行||`` - 一直重复，直到条件不满足. 
``||logic:如果 / 否则||`` - 满足条件时就执行.  
``||logic:非 <boolean>||`` - Switches the operation of a condition. Example: *while <true>* vs. *while not <true>*  

```ghost
player.onChat("run", function () {
    ww.moveWW(Direction.Forward, 1)
    ww.turnWW(LEFT_TURN)
    for (let index = 0; index < 4; index++) {
        
    }
    if (ww.locateGoon(Direction.Forward)) {
        ww.apprehendGoon(Direction.Forward)
    }
    while (!(false)) {
        
    }	
})
```
```template
player.onChat("run", function () {
    if (ww.locateGoon(Direction.Forward)) {

    }
})
```
```package
minecraft-ww1984=github:yuanlg/ww1984-ts
```
