<template>
  <div>
    <h2 class="subtitle">Pickup from</h2>
    <vs-row class="form-input-container address">
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" w="12">
        <div class="center center-inputs">
          <vs-input v-model="pickupAddress.name" placeholder="Pickup from" />

          <input type="hidden" v-model="pickupAddress.lat" />
          <input type="hidden" v-model="pickupAddress.lon" />
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  props: ['pickupAddress'],
}
</script>

<style>
.address .vs-input {
  width: 100%;
}
</style>
