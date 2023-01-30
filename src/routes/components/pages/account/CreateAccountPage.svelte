<script>
    import BackNavigationBar from "../../bars/BackNavigationBar.svelte";
    import {goto} from "$app/navigation";

    export let step;
    function onNext(){
        step += 1
    }

    function onBack() {
            goto()
    }

</script>

<button style="width: 30px; height: 40px" on:click={()=>{onBack()}}>Back</button>
<h1>New Password</h1>
<h1>Confirm Password</h1>
<button style="width: 30px; height: 40px" on:click={()=>{onNext()}}>Next</button>