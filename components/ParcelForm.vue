<template>
  <div class="form-container con-components">
    <div class="center grid">
      <h1>Parcel Quote</h1>
      <p class="header-desc">
        Send parcel around Cambodia with ease.
      </p>

      <PickupAddress :pickupAddress="quote.pickup_address_attributes" />
      <DeliveryAddress :deliveryAddress="quote.delivery_address_attributes" />
      <Shipment
        :items="quote.shipment_items_attributes"
        v-on:add-more-item="onAddMoreItem"
        v-on:remove-item="onRemoveItem"
      />
      <Contact :contact="quote.contact_attributes" />

      <AgreeTerm :agree="agree_term" />

      <div class="center con-checkbox agree-term">
        <vs-row class="form-input-container">
          <vs-col vs-type="flex" vs-justify="left" vs-align="center" w="12">
            <vs-button
              size="large"
              active
              v-on:click="onSubmit"
              :loading="requestLoading"
            >
              Send My Request
              <!-- {{ $store.state.quote.requestLoading }} -->
            </vs-button>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
import PickupAddress from '@/components/PickupAddress'
import DeliveryAddress from '@/components/DeliveryAddress'
import Shipment from '@/components/Shipment'
import Contact from '@/components/Contact'
import AgreeTerm from '@/components/AgreeTerm'

import { mapState } from 'vuex'

export default {
  data: () => {
    return {
      quote: {
        delivery_address_attributes: {
          name: 'PP',
          lat: '10',
          lon: '20',
        },
        pickup_address_attributes: {
          name: 'SR',
          lat: '30',
          lon: '60',
        },

        shipment_items_attributes: [
          {
            unit: '',
            width: '',
            length: '',
            height: '',
            weight: '',
            description: '',
          },
        ],

        contact_attributes: {
          name: '',
          email: '',
          phone_number: '',
          title: '',
        },
      },

      agree_term: false,
    }
  },

  computed: mapState({
    // merge store from the data and vuex
    requestLoading(state) {
      return state.quote.requestLoading
    },
  }),

  methods: {
    shipmentItemKey: (shipment) => {
      return `${shipment.unit}${shipment.width}${shipment.length}${shipment.height}${shipment.weight}`
    },

    onAddMoreItem() {
      var index = this.quote.shipment_items_attributes.length - 1
      var currentItem = this.quote.shipment_items_attributes[index]
      console.log('current Item', currentItem)
      if (!this.validate(currentItem)) return false

      var defaultShipmentItem = {
        unit: '',
        width: '',
        length: '',
        height: '',
        weight: '',
        description: '',
      }
      this.quote.shipment_items_attributes.push(defaultShipmentItem)
    },
    onRemoveItem(index) {
      this.quote.shipment_items_attributes.splice(index, 1)
    },

    validate(item) {
      return (
        item.unit && item.width && item.length && item.height && item.weight
      )
    },

    onSubmit() {
      console.log('submit: -------------------', this.quote)
      this.$store.dispatch('quote/submitQuoteForm', this.quote)
    },
  },
}
</script>

<style>
.form-container {
  background: #fff;
  border-radius: 30px;
  padding: 5px 20px;
}
.form-input-container {
  margin: 10px 0;
}

h1 {
  margin-bottom: 0;
  padding-bottom: 0;
}

.header-desc {
  color: gray;
  margin: 5px 0 15px 0;
}
</style>
