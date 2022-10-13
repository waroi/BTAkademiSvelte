<script>
  export let basket;
</script>

<span>{$basket}</span>

<style>
  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -5px;
    right: -10px;
    background-color: #0082c3;
    color: white;
    border-radius: 50px;
    font-weight: bold;
    padding: 5px;
    width: 10px;
    height: 10px;
    font-size: 12px;
  }
</style>
