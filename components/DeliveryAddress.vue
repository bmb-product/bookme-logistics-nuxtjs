<template>
  <div>
    <h2 class="subtitle">Delivery to</h2>
    <vs-row class="form-input-container address">
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" w="12">
        <div class="center center-inputs">
          <vs-input v-model="deliveryAddress.name" placeholder="Delivery to" />

          <input type="hidden" v-model="deliveryAddress.lat" />
          <input type="hidden" v-model="deliveryAddress.lon" />
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  props: ['deliveryAddress'],
}
</script>

<style>
.address .vs-input {
  width: 100%;
}
</style>
