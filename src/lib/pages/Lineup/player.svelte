<script>
    export let name = 'Name'
    export let num = 0
    export let other = ''
    export let jersey = 'white'
</script>

<div class="player text-center">
    <div class="shirt flex1">
        <img src='/src/assets/shirts/{jersey}.svg' alt="jersey" width="45px">
        <div class="number absolute">{num}</div>
    </div>
    <p class="name">{name}</p>
    <p class="other">{other}</p>
</div>

<style lang="scss">
    .player{
        width: 45px;
        .name{
            font-size: 14px;
            font-weight: bold;
        }
        .other{
            opacity: 0.6;
            font-size: 12px;
            line-height: 0.5;
            font-weight: 600;
        }
        .number{
            font-weight: bolder;
            color: black;
        }
    }
</style>