<script>
    import { Router, Route } from "svelte-navigator";
    
    import Navbar from './lib/components/Navbar.svelte'
    import Header from "./lib/components/Header.svelte"

    import Home from './lib/pages/Home/index.svelte'
    import Lineup from './lib/pages/Lineup/Lineup.svelte'
    import Competition from './lib/pages/Competition.svelte'
    import TierGame from './lib/pages/TierGame.svelte'
    import Compare from './lib/pages/Compare.svelte'

    let currentPage = "Home"
</script>

<Header />
<Router>
    <Route path='/' component={Home} />
    <Route path='/lineup' component={Lineup} />
    <Route path='/competition' component={Competition} />
    <Route path='/tiergame' component={TierGame} />
    <Route path='/compare' component={Compare} />
</Router>
<br /><br />
<br /><br />
<br /><br />
<Navbar currentPage={currentPage} />

<style>
</style>
