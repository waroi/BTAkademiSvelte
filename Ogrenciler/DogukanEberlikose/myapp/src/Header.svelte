<script>
  	import { cardCount } from './stores.js';
    let countValue;
      cardCount.subscribe(value => {
	countValue = value;
	});
</script>

<h1>Sepet {countValue}</h1>

<style>

</style>
