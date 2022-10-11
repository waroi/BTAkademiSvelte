<script>
  import AddPerson from "./AddPerson.svelte";

  let user = [
    {
      name: "varol",
      surname: "deneme",
      salary: 7000,
      currency: "",
    },
    {
      name: "ad1",
      surname: "deneme",
      salary: 7000,
      currency: "",
    },
  ];
  const savedPerson = (e) => {
    user = [...user, { ...e.detail }];
  };
</script>

<div>
  <AddPerson on:savedPerson={savedPerson} />
  {JSON.stringify(user)}
</div>
