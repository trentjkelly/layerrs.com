<script>
    import { onMount } from "svelte";
    import TopHeader from "../components/TopHeader.svelte";
    import TrackCard from "../components/TrackCard.svelte";
    import { isSidebarOpen } from "../stores/player";
    import { jwt, refreshToken } from "../stores/auth";

    // Each of the songs to be loaded in
    let artistId = 1 // Static for now

    /**
     * @type {any[]}
     */
    let trackIds = [];


    async function fetchData() {
        // const backendURL = import.meta.env.VITE_BACKEND_URL;
        const response = await fetch(`https://layerrs.com/api/recommendations/home`)
        const data = await response.json();
        trackIds = Object.keys(data).map(key => data[key])
    }

    onMount(async () => {
        await fetchData()
    })

    function toggleSidebar() {
        $isSidebarOpen = !$isSidebarOpen;
    }

</script>

<main class={`transition-all duration-300 h-auto w-full ${$isSidebarOpen ? 'ml-64' : 'ml-0'} bg-gradient-to-b from-gray-800 to-gray-900`}>

    <TopHeader pageName="Home" pageIcon="home.png"></TopHeader>

    <!-- Where the songs go -->
    <section class="w-full flex flex-wrap justify-around pb-24">
        {#each trackIds as id}
            <TrackCard trackId={id}></TrackCard>
        {/each}
    </section>
</main>
