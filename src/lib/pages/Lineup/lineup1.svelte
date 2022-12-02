<div class="lineup1">
    <div class="field">
        <div class="corner corner1"></div>
        <div class="corner corner2"></div>
        <div class="corner corner3"></div>
        <div class="corner corner4"></div>
        <div class="goal1 goal"></div>
        <div class="goal2 goal"></div>
        <div class="centerLine"></div>
        <div class="center"></div>
    </div>
</div>

<style lang="scss">
    .lineup1{
        --lineup1Color: #B9F7FF;
        --lineup1Size: 500px;
        --lineWidth: 5px;
        width: calc(var(--lineup1Size) * 13 / 18);
        height: var(--lineup1Size);
        overflow: hidden;
        border-radius: var(--lineWidth);
        .field{
            border: var(--lineWidth) solid var(--lineup1Color);
            width: 100%;
            height: 100%;
        }
        .corner{
            width: calc(var(--lineWidth) * 4);
            height: calc(var(--lineWidth) * 4);
            border-radius: 50%;
            border: var(--lineWidth) solid var(--lineup1Color);
            position: absolute;
        }
        .corner1{
            top: var(--lineWidth);
            left: var(--lineWidth);
            transform: translate(-50%, -50%);
        }
        .corner2{
            top: var(--lineWidth);
            right: var(--lineWidth);
            transform: translate(50%, -50%);
        }
        .corner3{
            bottom: var(--lineWidth);
            left: var(--lineWidth);
            transform: translate(-50%, 50%);
        }
        .corner4{
            bottom: var(--lineWidth);
            right: var(--lineWidth);
            transform: translate(50%, 50%);
        }
        .center{
            width: calc(var(--lineup1Size) * 4 / 23);
            height: calc(var(--lineup1Size) * 4 / 23);
            border-radius: 50%;
            border: var(--lineWidth) solid var(--lineup1Color);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .centerLine{
            height: var(--lineWidth);
            width: 100%;
            transform: translate(-50%, -50%);
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: var(--lineup1Color);
        }
        .goal{
            left: 50%;
            width: calc(var(--lineup1Size) * 13 / 40);
            height: calc(var(--lineup1Size) * 6 / 35);
            position: absolute;
            border: var(--lineWidth) solid var(--lineup1Color);
        }
        .goal1{
            transform: translate(-50%, -50%);
            top: var(--lineWidth);
        }
        .goal2{
            transform: translate(-50%, 50%);
            bottom: var(--lineWidth);
        }
    }
</style>