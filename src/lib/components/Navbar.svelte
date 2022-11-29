<script>
    import { Router, Link } from "svelte-navigator";
    import { onMount } from 'svelte';

    import IconHome from '../../assets/icons/home.svelte'
    import IconLineup from '../../assets/icons/lineup.svelte'
    import IconTierGame from '../../assets/icons/tiergame.svelte'
    import IconTree from '../../assets/icons/tree.svelte'
    import IconChart from '../../assets/icons/chartIcon.svelte'

    export let currentPage = 'Home'

    let themeGreen = '#00A04A'
    let themeDark = '#181818'

    let homeFill, lineupFill, tiergameFill, compareFill, competitionFill 
    homeFill = lineupFill = tiergameFill = compareFill = competitionFill = themeDark

    switch (currentPage) {
        case 'Home':
            homeFill = themeGreen
            break
        case 'Lineup':
            lineupFill = themeGreen
            break
        case 'TierGame':
            tiergameFill = themeGreen
            break
        case 'Compare':
            compareFill = themeGreen
            break
        case 'Competition':
            competitionFill = themeGreen
            break
        default:
            homeFill = themeGreen
            break
    }

    onMount(async () => {
        document.querySelectorAll('.nav').forEach((nav)=>{
            nav.addEventListener('click', ()=>{
                console.log('hello')
            })
        })
	})
</script>

<div id="Navbar" class="mainContainer px-base h-16 z-50 flex justify-between items-center fixed bottom-0 left-0 w-full bg-white border-solid border-gray-300 border-t overflow-hidden">
    <Router>
        <div class="nav">
            <Link to='/'>
                <IconHome fill={homeFill} />
            </Link>
        </div>
        <div class="nav">
            <Link to='/lineup'>
                <IconLineup fill={lineupFill} />
            </Link>
        </div>
        <div class="nav">
            <Link to='/tiergame'>
                <IconTierGame fill={tiergameFill} />
            </Link>
        </div>
        <div class="nav">
            <Link to='/compare'>
                <IconChart fill={compareFill} />
            </Link>
        </div>
        <div class="nav">
            <Link to='/competition'>
                <IconTree fill={competitionFill} />
            </Link>
        </div>
    </Router>
</div>

<style lang="scss">
    .nav{
        flex-grow: 1;
        cursor: pointer;
        height: 100%;
        > :global(a){
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &::before{
            content: "";
            position: absolute;
            pointer-events: none;
            top: 50%;
            left: 50%;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 70%, rgba(255,255,255,1) 100%);
            z-index: -1;
            opacity: 0;
            transition: 0.3s;
        }
        &:hover::before{
            opacity: 1;
        }
    }
</style>