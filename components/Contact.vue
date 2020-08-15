<template>
  <div class="contact">
    <h2 class="subtitle">Contact</h2>
    <vs-row class="form-input-container">
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" w="10">
        <div class="center center-inputs">
          <vs-input v-model="contact.name" placeholder="Name">
            <template #icon> <i class="bx bx-lock-open-alt"></i> </template>
          </vs-input>
        </div>
      </vs-col>

      <vs-col vs-type="flex" vs-justify="left" vs-align="center" w="2">
        <div class="center center-inputs" style="margin-left: 10px;">
          <vs-select placeholder="Select" v-model="contact.title">
            <vs-option label="Ms." value="ms"> Ms. </vs-option>
            <vs-option label="Mr." value="mr">Mr.</vs-option>
          </vs-select>
        </div>
      </vs-col>
    </vs-row>

    <vs-row class="form-input-container">
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" w="6">
        <div class="center center-inputs">
          <vs-input v-model="contact.email" placeholder="Email" />
        </div>
      </vs-col>

      <vs-col vs-type="flex" vs-justify="left" vs-align="center" w="6">
        <div class="center center-inputs" style="margin-left: 10px;">
          <vs-input v-model="contact.phone_number" placeholder="Phone number" />
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  props: ['contact'],
}
</script>

<style>
.contact .vs-input {
  width: 100%;
}

.contact .input-title .vs-input {
  width: 60px;
  padding-left: 10px;
}
</style>
