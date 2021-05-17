### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true
### @explicitHints 1

# Stealth Mission

## Step 1
Help Wonder Woman move through the room without triggering the alarm by avoiding the lasers. She'll need to sneak behind and takedown the criminal.

**Blocks Available:**  
``||ww:Move <direction> by <number>||`` - Wonder Woman will move in that *direction* the given *number* of blocks.  
``||ww:Turn <direction>||`` - Wonder Woman will turn in the given *direction*.  
``||ww:Takedown criminal <direction>||`` - Stealthily knock out the criminal in the given *direction*.  
``||loops:repeat <number> times||`` - Repeat code the given *number* of times.  

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
minecraft-ww1984=github:ReWrite-Media/ww1984-ts
```
