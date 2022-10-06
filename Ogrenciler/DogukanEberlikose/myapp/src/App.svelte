<script>
	import { cardCount, products} from './stores.js';
	import Arttir from './Arttir.svelte';
  import Header from "./Header.svelte";

	let countValue;
  let cadir;
  console.log($products)
	cardCount.subscribe(value => {
		countValue = value;
	});
  $products[0].subscribe(value => {
		cadir = value;
	});
  
</script>
<Header/>

<div class="Card">
<h1>Kamp Çadırı</h1>
<h1>Stok = {cadir}</h1>
<Arttir/>
</div>

<div class="Card">
<h1>Kamp Sandalyesi</h1>
<h1>Stok = 0</h1>
<Arttir/>
</div>

<div class="Card">
<h1>Mat</h1>
<h1>Stok = 0</h1>
<Arttir/>
</div>


<style>
.Card{
  padding: 25px;
  border: 2px solid black;
}
</style>
