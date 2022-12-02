<script>
    import portugal2022 from '../../../assets/shirts/portugal 2022.svg'

    export let name = 'Name'
    export let num = 0
    export let other = ''
    export let jersey = 'yellow'
</script>

<div class="player absolute">
    <div class="shirt flex1">
        <img src={portugal2022} alt="jersey" width="45px">
        <div class="number absolute top">{num}</div>
    </div>
    <p class="name">{name}</p>
    <p class="other">{other}</p>
</div>