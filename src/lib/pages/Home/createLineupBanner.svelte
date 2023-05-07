<script>
    import Lineup1 from "../Lineup/lineup1.svelte"
    import Player from "../Lineup/player.svelte"
</script>

<div class="CreateLineup banner">
    <h2>Create your <br /> line-up</h2>
    <Lineup1 />
    <div class="player1">
        <Player name="GOAT" num={7} jersey="portugal2022" />
    </div>
    <div class="player2">
        <Player name="LION" num={9} jersey="yellow" />
    </div>
    <div class="player3">
        <Player name="SNIPER" num={8} jersey="germany2014" />
    </div>
</div>

<style lang="scss">
    .CreateLineup{
        height: 264px;
        background-color: #74E9F8;
        padding: 15px;
        overflow: hidden;
        color: #0991A3;
        h2{
            font-size: 18px;
            margin-left: 10px;
            font-weight: bold;
        }
        > :global(.lineup1){
            --lineup1Color: #B9F7FF !important;
            --lineup1Size: 330px !important;
            --lineWidth: 4px !important;
            margin-top: 15px;
            margin-left: 15px;
        }
        .player1{
            position: absolute;
            top: 115px;
            left: 40px;
        }
        .player2{
            position: absolute;
            top: 90px;
            left: 125px;
        }
        .player3{
            position: absolute;
            top: 200px;
            left: 80px;
        }
    }
</style>