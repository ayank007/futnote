<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let bottomSheetToggler = false

    const closeBottomSheet = () => {
        dispatch('closeBottomSheet', false)
    }
</script>

<div class="bottomSheetBg" class:opened={bottomSheetToggler} on:click|self={closeBottomSheet}>
    <div class="bottomSheet">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    .bottomSheetBg{
        position: fixed;
        width: 100%;
        height: 100%;
        inset: 0;
        background-color: rgba($color: #000000, $alpha: 0.6);
        z-index: 200;
        pointer-events: none;
        opacity: 0;
        transition: 0.4s;
        &.opened{
            pointer-events: auto;
            opacity: 1;
            .bottomSheet{
                transform: translateY(0);
            }
        }
        
        .bottomSheet{
            position: fixed;
            bottom: 0;
            overflow-y: scroll;
            left: 0;
            z-index: 100;
            overflow-x: hidden;
            height: 40vh;
            min-height: 300px;
            width: 100%;
            background-color: white;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.4);
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            transform: translateY(100%);
            transition: 0.4s;
            &::-webkit-scrollbar {
                width: 0px;
                margin-top: 30px;
            }
        }
    }
</style>