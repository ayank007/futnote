<script>
    import Hero from '../../../assets/hero.svelte'
    import BuyMeACoffee from '../../../assets/icons/buyMeACoffee.jpg'
    import Profile from './profile.svelte';
    import WeekXI from './weekXI.svelte';
    import Affiliate from './affiliate.svelte';
    import Banner from './banner.svelte';
    import ThemeMenu from './themeMenu.svelte';

    import BottomSheet from '../../components/BottomSheet.svelte'

    let themeMenuToggler = false

    const toggleThemeMenu = () => {
        themeMenuToggler = !themeMenuToggler
    }

    const closeThemeMenu = (e) => {
        console.log(e.detail)
        themeMenuToggler = false
    }
</script>

<section id="Hero" class="mainContainer px-base">
    <h1 class="gothic">
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

<BottomSheet bottomSheetToggler={themeMenuToggler} on:closeBottomSheet={closeThemeMenu}>
    <ThemeMenu />
</BottomSheet>

<button class="themeBtn left-7" on:click={toggleThemeMenu}>
    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_463_292)">
        <path d="M4.37891 17.7461C4.37891 17.9921 4.44984 18.232 4.58531 18.4371L5.25484 19.4406C5.45992 19.7482 5.92555 19.9984 6.29547 19.9984H8.70445C9.07312 19.9984 9.53883 19.7484 9.74391 19.4406L10.4111 18.4375C10.5259 18.2641 10.62 17.9543 10.62 17.7461L10.625 16.2148H4.375L4.37891 17.7461ZM7.5 0C3.51641 0.0125117 0.625 3.24102 0.625 6.83984C0.625 8.57344 1.26719 10.1539 2.32656 11.3633C2.97227 12.0992 3.98047 13.6379 4.36641 14.9355C4.36763 14.9453 4.37007 14.9557 4.37129 14.9661H10.6291C10.6303 14.9557 10.6328 14.9459 10.634 14.9355C11.0197 13.6379 12.0281 12.0992 12.6738 11.3633C13.7344 10.1875 14.375 8.60937 14.375 6.83984C14.375 3.07812 11.2969 0.000152344 7.5 0ZM11.2656 10.1602C10.6539 10.8574 9.89688 11.9687 9.34961 13.1246H5.65391C5.10664 11.9687 4.34961 10.8574 3.73828 10.1605C2.93906 9.25 2.5 8.05078 2.5 6.83984C2.5 4.42578 4.37891 1.88477 7.46484 1.875C10.2578 1.875 12.5 4.11719 12.5 6.83984C12.5 8.05078 12.0625 9.25 11.2656 10.1602ZM6.875 3.125C5.15234 3.125 3.75 4.52734 3.75 6.25C3.75 6.59547 4.02953 6.875 4.375 6.875C4.72047 6.875 5 6.59375 5 6.25C5 5.21602 5.84102 4.375 6.875 4.375C7.22047 4.375 7.5 4.09578 7.5 3.75039C7.5 3.405 7.21875 3.125 6.875 3.125Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_463_292">
        <rect width="15" height="20" fill="white"/>
        </clipPath>
        </defs>
    </svg>
</button>
<div class="themeBtn right-7">
    <img src={BuyMeACoffee} alt="Buy Me A Coffee">
</div>

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
            margin-right: -28px;
        }
    }

    .themeBtn{
        background: linear-gradient(90deg, #00A04A 0%, #037E00 100%);
        width: 45px;
        height: 45px;
        border-radius: 50%;
        position: fixed;
        bottom: 70px;
        cursor: pointer;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>