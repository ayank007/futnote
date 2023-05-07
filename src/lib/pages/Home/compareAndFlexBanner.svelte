<script>
    import spiderChart from '../../../assets/banner/spiderChart.png'
</script>

<div class="compareAndFlexBanner banner">
    <h2>
        and our favorite... 
        <br>
        <span>Compare & Flex</span>
    </h2>
    <img src={spiderChart} alt="Spider Chart">
</div>

<style lang="scss">
    .compareAndFlexBanner{
        background-color: #CF8CF9;
        padding: 15px;
        overflow: hidden;
        height: 244px;
        h2{
            margin-left: 10px;
            span{
                font-weight: bold;
                font-size: 18px;
            }
            color: #7B2FAA;
        }
        img{
            width: 430px;
            max-width: unset;
            position: absolute;
            right: -50px;
            top: 70px;
        }
    }
</style>