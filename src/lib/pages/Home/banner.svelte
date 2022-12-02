<script>
    import bannerCreateLineup from '../../../assets/banner/createLineup.png'
    import bannerTierGame from '../../../assets/banner/tierGame.png'
    import bannerCompare from '../../../assets/banner/compare.png'

    import PredictLeagueBanner from './predictLeagueBanner.svelte'
    import CreateLineupBanner from './createLineupBanner.svelte'

</script>

<div id="Banners" class="mainContainer px-base my-8 grid grid-cols-2 gap-x-5">
    <div class="flex flex-col gap-y-5 flex-grow w-full">
        <PredictLeagueBanner />
        <img src={bannerCompare} alt="Compare & Flex" />
    </div>
    <div class="flex flex-col gap-y-5 flex-grow w-full">
        <CreateLineupBanner />
        <img src={bannerTierGame} alt="Tier Game" />
    </div>
</div>

