// enums
enum Direction {
    //% block="前"
    Forward,
    //% block="后"
    Back,
    //% block="左"
    Left,
    //% block="右"
    Right
}

enum BeamsGlass {
    //% blockIdentity="blocks.block" enumval=262385 block="黄色 彩色玻璃"
    //% jres alias=黄色_彩色玻璃
    YellowStainedGlass = 262385,
    //% blockIdentity="blocks.block" enumval=327921 block="绿色 彩色玻璃"
    //% jres alias=绿色_彩色玻璃
    LimeStainedGlass = 327921,
    //% blockIdentity="blocks.block" enumval=721137 block="蓝色 彩色玻璃"
    //% jres alias=蓝色_彩色玻璃
    BlueStainedGlass = 721137,
    //% blockIdentity="blocks.block" enumval=917745 block="红色 彩色玻璃"
    //% jres alias=红色_彩色玻璃
    RedStainedGlass = 917745
}

// global variables
const stopBlock = BEDROCK
const stopPosition = world(35,1,0)
const locatePaintingTarget = 14
const locateGoonTarget = 113

const directions = [
    FORWARD,
    BACK,
    LEFT,
    RIGHT
];

const turns = [
    LEFT_TURN,
    RIGHT_TURN
]

//%  block="神奇女侠" weight=200 color=#BF9B30 icon="\u2605"
namespace ww {

    /**
     * 向哪里移动神奇女侠几步
     */
    //% block="神奇女侠向 %d 移动 %n"
    export function moveWW(d: Direction, n: number): void {
        for (let i = 0; i < n; i++){
            if(shouldStop()) return;

            const direction = directions[d];

            agent.move(direction, 1);
        }
    }

    /**
     * 神奇女侠向哪转
     */
    //% block="神奇女侠向 %t 转"
    export function turnWW(t: TurnDirection): void {
        if(shouldStop()) return;

        const turn = turns[t];

        agent.turn(turn);
    }  

    /**
     * 在哪边放置方块
     * @param block the block
     */    
    //% block="放置 %block %d"
    export function placeBlock(block: BeamsGlass, d: Direction): void {
        if(shouldStop()) return;

        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        const direction = directions[d];

        agent.place(direction);
    }  

    /**
     * 油画是不是在这
     */
    //% block="油画在这吗 %d"
    export function locatePainting(d: Direction): boolean {
        if(shouldStop()) return false;

        const direction = directions[d];

        const inspected = agent.inspect(AgentInspection.Block, direction);

        return inspected === locatePaintingTarget;
    }

    /**
     * 摧毁哪个方向的方块
     */
    //% block="摧毁 %d"
    export function retrievePainting(d: Direction): void {
        if(shouldStop()) return;

        const direction = directions[d];

        agent.destroy(direction);
    }    

    /**
     * 判断对应方向的人是否是小偷
     */
    //% block="此人是小偷吗 %d"
    export function locateGoon(d: Direction): boolean {
        if(shouldStop()) return false;

        const direction = directions[d];

        const inspected = agent.inspect(AgentInspection.Block, direction);

        return inspected === locateGoonTarget;
    }

    /**
     * 向哪个方向使用真言套索
     */
    //% block="真言套索 %d"
    export function apprehendGoon(d: Direction): void {
        if(shouldStop()) return;

        const direction = directions[d];

        agent.destroy(direction);
    }

    /**
     * 向哪个方向打到罪犯
     */
    //% block="打倒罪犯 %d"
    export function takedownGoon(d: Direction): void {
        if(shouldStop()) return;

        const direction = directions[d];

        agent.destroy(direction);
    }    

    // helper functions
    function shouldStop(): boolean {
        return blocks.testForBlock(stopBlock, stopPosition);
    }
}
