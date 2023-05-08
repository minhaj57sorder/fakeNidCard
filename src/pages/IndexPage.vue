<template>
  <NidGenerate/>
  <q-page class="q-pa-lg feilds">
    <div class="row q-col-gutter-md">
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.nameBangla" dense outlined
          hint="name in bangla"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.nameEnglish" dense outlined
          hint="name in english"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.nameFather" dense outlined
          hint="father name in bangla"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.nameMother" dense outlined
          hint="mother name in bangla"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.bloodGroup" dense outlined
          hint="Blood Group"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.dathOfBirth" dense outlined
          hint="date of birth in english 27 mar 2023"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.birthPlace" dense outlined
          hint="Birth place in bangla"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.nidNo" dense outlined
          hint="nid no"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.addressline1" dense outlined
          hint="village/road"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.addressline2" dense outlined
          hint="post"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.addressline3" dense outlined
          hint="sub district"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.addressline4" dense outlined
          hint="district"></q-input>
      </div>
      <div class="col-6">
        <q-input :rules="[val => !!val || 'Field is required']" v-model="nidDataFeilds.payingDate" dense outlined
          hint="paying date"></q-input>
      </div>
      <div class="col-6">
        <q-file color="teal" dense outlined @update:model-value="updatePhoto()" v-model="nidDataFeilds.photo" hint="photo"
          accept="image/*">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
      </div>
      <div class="col-6">
        <q-file color="teal" dense outlined @update:model-value="updateSignature()" v-model="nidDataFeilds.signature"
          hint="signature" accept="image/*">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
      </div>
      <div class="col-6">
        <q-file color="teal" dense outlined @update:model-value="updatePayerSignature()"
          v-model="nidDataFeilds.payerSignature" hint="payer signature" accept="image/*">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
      </div>
      <div class="col-6">
        <q-file color="teal" dense outlined @update:model-value="updateBarcode()" v-model="nidDataFeilds.barCode"
          hint="barcode" accept="image/*">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
      </div>
      <div class="col-6">
        <q-btn to="/nid" clickable class="q-mb-lg full-width bg-primary text-white">Generate</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useNidDataFeilds } from 'stores/dataStore'
import { useActivation } from 'src/stores/dataStore';
import { useRouter } from 'vue-router';
import NidGenerate from 'src/pages/NidGenerate.vue';
const activatorStore = useActivation()
const router = useRouter()

if (!activatorStore.checkActivation()) {
  router.push("/activate")
}
const nidDataFeilds = useNidDataFeilds()
const uploades = reactive({
  photo: null,
  barCode: null,
  payerSignature: null,
  signature: null
})
const updatePhoto = () => {
  setTimeout(function () {
    nidDataFeilds.photoURL = URL.createObjectURL(nidDataFeilds.photo)
  }, 0)
}
const updateSignature = () => {
  setTimeout(function () {
    nidDataFeilds.signatureURL = URL.createObjectURL(nidDataFeilds.signature)
  }, 0)
}
const updatePayerSignature = () => {
  setTimeout(function () {
    nidDataFeilds.payerSignatureURL = URL.createObjectURL(nidDataFeilds.payerSignature)
  }, 0)
}
const updateBarcode = () => {
  setTimeout(function () {
    nidDataFeilds.barCodeURL = URL.createObjectURL(nidDataFeilds.barCode)
    // nidDataFeilds.barCodeURL="https://static.abaenglish.com/cover/poster_U8.png"
  }, 0)
}
</script>
<style>
.feilds{
  margin-top: -300px;
}
</style>
