<script>
    export  let step;
    function onBack(){
        step -= 1
    }
</script>

<button style="width: 30px; height: 40px" on:click={()=>{onBack()}}>Next</button>