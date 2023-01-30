<script>
    import CreateAccountPage from "../components/pages/account/CreateAccountPage.svelte";
    import GenerateSeedPage from "../components/pages/account/GenerateSeedPage.svelte";
    import CompleteSeedPage from "../components/pages/account/CompleteSeedPage.svelte";
    let step = 1

</script>

{#if step === 1}
    <CreateAccountPage bind:step={step}/>
{:else if step === 2}
    <GenerateSeedPage bind:step={step}/>
{:else if step === 3}
    <CompleteSeedPage bind:step={step}/>
{/if}