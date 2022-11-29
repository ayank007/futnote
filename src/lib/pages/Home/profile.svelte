<script>
    import menu from '../../../assets/icons/menu.svg'
</script>

<div class="profile">
    <div class="menu">
        <img src={menu} alt="menu">
    </div>
    <div class="details1">
        <div class="icon">A</div>
        <div class="name">
            <h2>Ayan Koley</h2>
            <p>@ayank007</p>
        </div>
    </div>
    <div class="details2">
        <p>
            Joined Nov, 2022
        </p>
        <p>
            Points won: 100🔥
        </p>
    </div>
</div>

<style lang="scss">
    .profile{
        width: 80%;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px;
        font-size: 14px;
        background-color: white;
        border: 1px solid rgba(0,0,0,.12);
        box-shadow: 0 4px 4px rgba(0,0,0,.25);
        border-radius: 20px;
        .menu{
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
        }
        .icon{
            height: 60px;
            width: 60px;
            border-radius: 50%;
            background-color: var(--themeGreen);
            color: #003c1c;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: 900;
        }
        .details1{
            display: flex;
            column-gap: 20px;
            h2{
                font-size: 18px;
                font-weight: bold;
            }
            p{
                color: rgba(0,0,0,.75);
                font-size: 16px;
                margin-top: 2px;
                font-weight: 500;
            }
        }
        .details2{
            margin-top: 10px;
            color: rgba(0,0,0,.75);
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            font-weight: 500;
        }
    }
</style>