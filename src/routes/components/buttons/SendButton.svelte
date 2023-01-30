<script>
    function moveToSend() {
        location.href = "/send"
    }
</script>

<button on:click={()=>{moveToSend()}}>Send</button>