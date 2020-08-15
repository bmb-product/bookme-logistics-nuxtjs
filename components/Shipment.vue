<template>
  <div>
    <h2 class="subtitle">Shipment Items</h2>
    <div v-for="(item, index) in shipmentItems" :key="itemKey(item)">
      <vs-row class="form-input-container shipment-item">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
          <vs-input
            v-model="item.unit"
            type="number"
            placeholder="Unit"
            class="input-unit"
          />
        </vs-col>

        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
          <vs-input
            v-model="item.width"
            type="number"
            placeholder="Width"
            class="input-dimension"
        /></vs-col>

        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2"
          ><vs-input
            v-model="item.length"
            type="number"
            placeholder="Length"
            class="input-dimension"
        /></vs-col>

        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2"
          ><vs-input
            v-model="item.height"
            type="number"
            placeholder="Height"
            class="input-dimension"
        /></vs-col>

        <vs-col
          vs-type="flex"
          type="number"
          vs-justify="center"
          vs-align="center"
          w="2"
          ><vs-input
            v-model="item.weight"
            placeholder="Weight"
            class="input-dimension"
        /></vs-col>

        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
          <div class="button-group">
            <vs-button
              class="add-shipment-item"
              v-on:click="$emit('add-more-item', index)"
            >
              +
            </vs-button>

            <vs-button
              class="add-shipment-item"
              v-on:click="$emit('remove-item', index)"
              v-if="index > 0"
            >
              -
            </vs-button>
          </div>
        </vs-col>
      </vs-row>

      <!-- <vs-row class="form-input-container shipment-item">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <vs-input
            v-model="item.description"
            placeholder="Description"
            class="input-desc"
          />
        </vs-col>
      </vs-row> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data: function () {
    return {
      shipmentItems: this.items,
    }
  },
  methods: {
    itemKey: (item) => {
      console.log('item', item)
      return `${item.unit}${item.width}${item.length}${item.height}${item.weight}`
    },
  },
}
</script>

<style>
.input-unit .vs-input {
  width: 60px !important;
}

.input-dimension .vs-input {
  width: 60px !important;
}

.input-desc .vs-input {
  width: 100% !important;
}

.button-group {
  margin-top: -6px;
}

.add-shipment-item {
  display: inline;
}
</style>
