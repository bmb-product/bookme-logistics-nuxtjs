<template>
  <div class="form-container con-components">
    <div class="center grid">
      <h1>Parcel Quote</h1>
      <p class="header-desc">
        Send parcel around Cambodia with ease.
      </p>

      <PickupAddress :pickupAddress="pickup_address_attributes" />
      <DeliveryAddress :deliveryAddress="delivery_address_attributes" />
      <Shipment
        :items="shipment_items_attributes"
        v-on:add-more-item="onAddMoreItem"
        v-on:remove-item="onRemoveItem"
      />
      <Contact :contact="contact_attributes" />

      <AgreeTerm :agree="agree_term" />

      <div class="center con-checkbox agree-term">
        <vs-row class="form-input-container">
          <vs-col vs-type="flex" vs-justify="left" vs-align="center" w="12">
            <vs-button size="large" active>
              Send My Request
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

export default {
  data: () => {
    return {
      delivery_address_attributes: {
        name: '',
        lat: '',
        lon: '',
      },
      pickup_address_attributes: {
        name: '',
        lat: '',
        lon: '',
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

      agree_term: false,
    }
  },

  methods: {
    shipmentItemKey: (shipment) => {
      return `${shipment.unit}${shipment.width}${shipment.length}${shipment.height}${shipment.weight}`
    },

    onAddMoreItem() {
      var index = this.shipment_items_attributes.length - 1
      var currentItem = this.shipment_items_attributes[index]
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
      this.shipment_items_attributes.push(defaultShipmentItem)
    },
    onRemoveItem(index) {
      this.shipment_items_attributes.splice(index, 1)
    },

    validate(item) {
      return (
        item.unit && item.width && item.length && item.height && item.weight
      )
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
