<script>
    import Lineup1 from "../Lineup/lineup1.svelte"
    import Player from "../Lineup/player.svelte"
</script>

<div class="CreateLineup">
    <h2>Create your <br /> line-up</h2>
    <Lineup1 />
    <Player name="GOAT" num={7} jersey="portugal2022" />
</div>

<style lang="scss">
    .CreateLineup{
        height: 264px;
        background-color: #74E9F8;
        padding: 15px;
        border-radius: 20px;
        overflow: hidden;
        h2{
            font-size: 18px;
            margin-left: 10px;
            font-weight: bold;
            color: #0991A3;
        }
        > :global(.lineup1){
            --lineup1Color: #B9F7FF !important;
            --lineup1Size: 330px !important;
            --lineWidth: 4px !important;
            margin-top: 15px;
            margin-left: 15px;
        }
        > :global(.player){
            top: 0;
            left: 0;
        }
    }
</style>