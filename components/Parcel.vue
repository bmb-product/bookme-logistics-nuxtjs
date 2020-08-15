<template>
  <div class="center grid">
    <div class="square">
      <div class="child">
        <vs-row>
          <vs-col
            key="intro"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="8"
          >
            <ParcelIntro />
          </vs-col>

          <vs-col
            key="form"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="4"
          >
            <ParcelForm />
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
import ParcelForm from '@/components/ParcelForm'
import ParcelIntro from '@/components/ParcelIntro'

export default {
  components: {
    ParcelForm,
    ParcelIntro,
  },
}
</script>
