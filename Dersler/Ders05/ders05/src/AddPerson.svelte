<script>
  import { createEventDispatcher } from "svelte";
  let name, surname, salary;
  let currency = [];
  let send = createEventDispatcher();
  const sendData = () => {
    send("savedPerson", {
      name,
      surname,
      salary,
      currency,
    });
  };
</script>

<form on:submit|preventDefault={sendData}>
  <div>
    <input type="text" placeholder="name" bind:value={name} />
  </div>
  <div>
    <input type="text" placeholder="surname" bind:value={surname} />
  </div>
  <div>
    <input type="number" placeholder="salary" bind:value={salary} />
  </div>
  <div>
    <input type="checkbox" value="TL" bind:group={currency} />
  </div>
  <div>
    <input type="checkbox" value="USD" bind:group={currency} />
  </div>
  <div>
    <input type="checkbox" value="BTC" bind:group={currency} />
  </div>
  <button type="submit">Gönder</button>
</form>
