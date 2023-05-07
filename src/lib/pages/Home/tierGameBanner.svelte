<div class="TierGameBanner banner">
    <h2>A Tier Game</h2>
    <div class="tgbGrid">
        <div>
            <div>Most important players</div>
            <div>
                <div class="circle">?</div>
            </div>
        </div>
        <div>
            <div>Good Form</div>
            <div></div>
        </div>
        <div>
            <div>to be Unloaded</div>
            <div></div>
        </div>
    </div>
</div>

<style lang="scss">
    .TierGameBanner{
        height: 173px;
        background-color: #97E37B;
        color: #2E7215;
        padding: 15px;
        overflow: hidden;
        h2{
            margin-left: 10px;
            font-size: 18px;
            font-weight: bold;
        }
        .tgbGrid{
            display: flex;
            margin-top: 10px;
            gap: 5px;
            width: 400px;
            flex-flow: column;
            font-size: 12px;
            > div{
                display: grid;
                gap: 5px;
                grid-template-columns: 100px auto;
                > div{
                    display: flex;
                    align-items: center;
                    padding: 5px;
                    padding-left: 10px;
                    background-color: #C4EAB5;
                }
            }
        }
        .circle{
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #97E37B;
        }
    }
</style>