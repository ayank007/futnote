<script>
    import LeaguePosition from '../../../assets/icons/leaguePosition.svelte' 
</script>

<div class="predictLeagueBanner">
    <h2>Predict League</h2>
    <div class="leagueTable">
        <div class="heading">
            <div>&nbsp;</div>
            <div class="leagueGrid">
                <div></div>
                <div></div>
                <div>Pl</div>
                <div>W</div>
                <div>D</div>
                <div>L</div>
                <div>+/-</div>
                <div>Pts</div>
            </div>
        </div>
        <div>
            <div>                    
                <LeaguePosition />
            </div>
            <div class="leagueGrid">
                <div class="qf qfGreen"></div>
                <div>Team A</div>
                <div>38</div>
                <div>30</div>
                <div>6</div>
                <div>2</div>
                <div>+39</div>
                <div>96</div>
            </div>
        </div>
        <div>
            <div>                    
                <LeaguePosition />
            </div>
            <div class="leagueGrid">
                <div class="qf qfGreen"></div>
                <div>Team B</div>
                <div>38</div>
                <div>28</div>
                <div>7</div>
                <div>3</div>
                <div>+42</div>
                <div>91</div>
            </div>
        </div>
        <div>
            <div>                    
                <LeaguePosition />
            </div>
            <div class="leagueGrid">
                <div class="qf qfOrange"></div>
                <div>Team C</div>
                <div>38</div>
                <div>28</div>
                <div>5</div>
                <div>4</div>
                <div>+30</div>
                <div>89</div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .predictLeagueBanner{
        background-color: #FF9836;
        padding: 15px;
        border-radius: 20px;
        height: 190px;
        overflow: hidden;
        h2{
            color: #f2e3d5;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
        }
        > .leagueTable{
            width: 320px;
            zoom: 0.8;
        }
        .leagueTable{
            position: absolute;
            > div{
                display: flex;
                align-items: center;
                height: 50px;
                margin: 10px 0;
                gap: 15px;
            }
            .leagueGrid{
                width: 100%;
                height: 100%;
                background-color: #FFDBB9;
                color: rgba($color: #181818, $alpha: 0.65);
                display: grid;
                align-items: center;
                gap: 10px;
                padding: 8px 10px;
                border-radius: 4px;
                grid-template-columns: 10px auto 20px 20px 20px 20px 30px 20px;
                > div:not(:nth-child(2)) {
                    text-align: center;
                }
            }
            .heading{
                height: 25px;
                .leagueGrid{
                    color: #181818;
                    background-color: unset;
                }
            }
        }
        .qf{
            width: 8px;
            height: 100%;
            border-radius: 5px;
            &.qfGreen{
                background-color: var(--themeGreen);
            }
            &.qfOrange{
                background-color: #FF9836;
            }
        }
    }
</style>