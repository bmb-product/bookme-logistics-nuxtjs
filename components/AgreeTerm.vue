<template>
  <div class="center con-checkbox agree-term">
    <vs-row class="form-input-container">
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" w="12">
        <vs-checkbox val="automatically" v-model="agree">
          By clicking this you agree with our
          <nuxt-link to="/term_of_use" class="live-link" target="_blank">
            terms of use
          </nuxt-link>
        </vs-checkbox>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  props: ['agree'],
}
</script>

<style>
.live-link {
  margin-left: 0.5em;
  white-space: nowrap;
}
</style>
