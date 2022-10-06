<div class="card">
  <h1>
    <slot name="isim">
      <span>İsim Girişi Yapılmadı</span>
    </slot>
  </h1>
  <h3>
    <slot name="adres">
      <span> Adres Girişi Yapılmadı </span>
    </slot>
  </h3>
  <h6><slot /></h6>
</div>

<style>
  .card {
    width: 250px;
    border: 2px solid orangered;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
  }
</style>
