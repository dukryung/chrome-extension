<script>

    function onNext(){
        location.href = "/wallet"
    }

    function onBack() {
        history.back()
    }

</script>

<button style="width: 30px; height: 40px" on:click={()=>{onBack()}}>Back</button>
<h1>Seed Words</h1>
<h1>Password</h1>
<a style="width: 30px; height: 40px" on:click={()=>{onNext()}}>Next</a>