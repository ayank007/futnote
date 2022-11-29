<script>
    import bannerCreateLineup from '../../../assets/banner/createLineup.png'
    import bannerPredictLeague from '../../../assets/banner/predictLeague.png'
    import bannerTierGame from '../../../assets/banner/tierGame.png'
    import bannerCompare from '../../../assets/banner/compare.png'
</script>

<div id="Banners" class="mainContainer px-base my-8 flex gap-x-5">
    <div class="flex flex-col gap-y-5 flex-grow">
        <img src={bannerPredictLeague} alt="Predict League" />
        <img src={bannerCompare} alt="Compare & Flex" />
    </div>
    <div class="flex flex-col gap-y-5 flex-grow">
        <img src={bannerCreateLineup} alt="Create Lineup" />
        <img src={bannerTierGame} alt="Tier Game" />
    </div>
</div>