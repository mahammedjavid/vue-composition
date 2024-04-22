import { ref } from "vue"

export default function userAlert(){
    const isAlertVisible = ref(false)
    function showAlert(){
        isAlertVisible.value = true
    }
    function hideAlert(){
        isAlertVisible.value = false
    }
    return [isAlertVisible , showAlert , hideAlert]
}
