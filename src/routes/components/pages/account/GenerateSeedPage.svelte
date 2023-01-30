<script>
import BackNavigationBar from "../../bars/BackNavigationBar.svelte";
    export let step;

function onNext(){
    step +=1
}

</script>

<BackNavigationBar bind:step={step}/>
<h1>Generate Seed Page</h1>
<button style="width: 30px; height: 40px" on:click={()=>{onNext()}}>Next</button>