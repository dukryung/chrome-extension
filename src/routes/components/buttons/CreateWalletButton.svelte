<script>
    import {goto} from '$app/navigation';

    function moveToCreateWalletPage() {
        goto(`/create`, {replaceState: true})
    }
</script>
<button style="width: 30px; height: 40px" on:click={()=>{moveToCreateWalletPage()}}>Create Wallet</button>