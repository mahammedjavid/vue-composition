<template>
    <h1>This is on Custom hooks in Composition api</h1>
    <h5 v-if="isAlertVisible">This message only shown when alert flag is true</h5>
<h5 v-else>This message only shown when alert flag is false</h5>
<button v-if="!isAlertVisible" @click="showAlert">Make Alert True</button>
<button v-if="isAlertVisible" @click="hideAlert">Make Alert False</button>
</template>

<script>
import userAlert from './hooks/alert';
export default {
    setup() {
        const [isAlertVisible, showAlert, hideAlert] = userAlert()
        return {
            isAlertVisible,
            showAlert,
            hideAlert
        }
    }
}
</script>