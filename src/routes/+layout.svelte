<script>
    import Header from "./Header.svelte"
    import MainNavigationBar from "./components/bars/MainNavigationBar.svelte";
</script>


<div clss="app">
    <Header/>
    <main>
        <slot/>
    </main>
    <MainNavigationBar/>
</div>