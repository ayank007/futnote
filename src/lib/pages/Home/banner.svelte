<script>
    import PredictLeagueBanner from './predictLeagueBanner.svelte'
    import CreateLineupBanner from './createLineupBanner.svelte'
    import CompareAndFlexBanner from './compareAndFlexBanner.svelte'
    import TierGame from './tierGameBanner.svelte'

</script>

<div id="Banners" class="mainContainer px-base my-8 grid grid-cols-2 gap-x-5">
    <div class="flex flex-col gap-y-5 flex-grow w-full">
        <PredictLeagueBanner />
        <CompareAndFlexBanner />
    </div>
    <div class="flex flex-col gap-y-5 flex-grow w-full">
        <CreateLineupBanner />
        <TierGame />
    </div>
</div>

<style>
    :global(.banner) {
        border-radius: 15px;
    }
</style>

