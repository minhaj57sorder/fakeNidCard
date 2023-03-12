<template>
    <div class="center-element">
        <div class="input-cont">
            <q-input class="input-element" dense outlined v-model="activatorStore.activator"
                label="Enter Registration Key" />
            <q-btn class="full-width" @click="submitFunc" color="green">Submit</q-btn>
        </div>
    </div>
</template>

<script setup>
import { useActivation } from 'src/stores/dataStore';
import { useRouter } from 'vue-router';
const activatorStore = useActivation()
const router = useRouter()
if (activatorStore.checkActivation()) {
    router.push("/")
} else {
    router.push("/activate")
}
function submitFunc() {
    activatorStore.valuateActivate()
    location.reload()
}
</script>
<style scoped>
.center-element {
    width: 100%;
    height: 100vh;
    position: relative;
}

.input-cont {

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.input-element {
    width: 350px;
}
</style>