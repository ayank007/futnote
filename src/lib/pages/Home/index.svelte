<script>
    import Hero from '../../../assets/hero.svelte'
    import Profile from './profile.svelte';
    import WeekXI from './weekXI.svelte';
    import Affiliate from './affiliate.svelte';
    import Banner from './banner.svelte';
</script>

<section id="Hero" class="mainContainer px-base">
    <h1>
        Share your tactics with Futnote
    </h1>
    <div class="background"></div>
    <Hero />
    <Profile />   
</section>
<br />
<WeekXI />
<Banner />
<Affiliate /> 

<style lang="scss">
    #Hero{
        display: flex;
        justify-content: flex-end;
        height: 280px;
        padding-bottom: 10px;
        overflow: hidden;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        .background{
            z-index: -1;
            overflow-x: hidden;
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 50px;
            left: 0;
            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: calc(100% + 60px);
                border-bottom-left-radius: 100px;
                border-bottom-right-radius: 100px;
                height: 100%;
                background-color: var(--themeGreen);
            }
        }
        h1{
            font-size: 25px;
            font-weight: 900;
            text-transform: capitalize;
            color: white;
            position: absolute;
            line-height: 1.3;
            left: 30px;
            top: 30%;
            width: 50%;
            transform: translateY(-50%);
        }
        :global(.hero){
            width: 60%;
            height: 100%;
            top: 0;
            margin-right: -20px;
        }
    }
</style>