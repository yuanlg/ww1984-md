### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true 
### @explicitHints 1

# Suspicious Crates

## Step 1
Help Wonder Woman move through the crates and find the missing painting piece. Search each one and if she finds the missing puzzle piece, have her break the box to get it.

**Blocks Available:**  
``||ww:Move <direction> by <number>||`` - Wonder Woman will move in that *direction* the given *number* of blocks.  
``||ww:Turn <direction>||`` - Wonder Woman will turn in the given *direction*.  
``||ww:painting inside crate <direction>||`` - Return a boolean (*true* | *false*) of whether the painting is found hidden in the given *direction*.  
``||ww:Break crate <direction>||`` - Instruct Wonder Woman to try and retrieve the hidden painting.  
``||loops:repeat <number> times||`` - Repeat code the given *number* of times.  
``||loops:while <boolean>||`` - Repeatedly run the code while the boolean is *true*.  
``||logic:if / then||`` - Checks if a condition is *true* and then does something if it is.  
``||logic:not <boolean>||`` - Switches the operation of a condition. Example: *while <true>* vs. *while not <true>*  

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
minecraft-ww1984=github:ReWrite-Media/ww1984-ts
```