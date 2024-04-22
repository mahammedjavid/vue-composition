<template>
  Name : .{{ user.name }} <br />
  Age : {{ user.age }} <br />
  randomName : {{ randomName }} <br />
  randomName2 : {{ randomName2 }}

  <hr />
  <button @click="changeNameOne('Dynamic name 1')">Change user name 1</button>
  <button @click="changeNameTwo('Dynamic name 2')">Change user name 2</button>
  <hr />

  User One and User Two Input is : {{ userTwoInputCombined || "---" }} <br />
  <input type="text" v-model="userInputOne" />
  <input type="text" v-model="userInputTwo" />

  <hr>

  <h2>Template Ref</h2>
  education value is {{ education  }} <br>
  <input type="text" ref="EducationInut"> <br>
  <button @click="setEducation">Set Education</button>

  <hr>
  <user-data :user="user"></user-data>
<hr>
<customer_comp></customer_comp>
</template>

<script>
import { computed, provide, reactive, ref, watch ,onBeforeMount , onBeforeUpdate , onBeforeUnmount , onUpdated , onMounted , onUnmounted } from "vue"; //only for object
import userDataVue from './userData.vue';
import customerVue from './customer.vue';

export default {
  components : {
    "user-data" : userDataVue,
    "customer_comp" : customerVue
  },
  setup() {
    const randomName = ref("Mahammed");
    const randomName2 = ref("Test Message")
    const provideData = ref("this is data from provide function")
    provide('provideData',provideData)
    const user = reactive({
      name: "Javid",
      age: "23",
    });
    const EducationInut = ref(null)
    const education = ref('')

    const userInputOne = ref("");
    const userInputTwo = ref("");
    function setEducation(){
      education.value = EducationInut.value.value
    }

    // setTimeout(() => {
    //   user.name = 'Javid changed'
    // }, 2000);

    function changeNameOne(name) {
      // user.name = 'Javid changed'
      randomName.value = name;
    }

    function changeNameTwo(name) {
      // user.name = 'Javid changed'
      randomName2.value = name;
    }

    const userTwoInputCombined = computed(() => {
      return userInputOne.value + " " + userInputTwo.value;
    });

    watch([randomName ,randomName2], ((newValues , OldValues)=>{
      console.log("new random 1  is :" ,newValues[0])
      console.log("old random 1 is :" ,OldValues[0])
      console.log("new random 2 is :" ,newValues[1])
      console.log("old random 2 is :" ,OldValues[1])
    }))

    // lifecycle

    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })
    onMounted(()=>{
      console.log('onMounted')
    })
    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    })
    onUpdated(()=>{
      console.log('onUpdated')
    })
    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount')
    })
    onUnmounted(()=>{
      console.log('onBeforeMount')
    })

    return {
      user,
      randomName,
      userName: user.name,
      changeNameOne: changeNameOne,
      changeNameTwo: changeNameTwo,
      userTwoInputCombined,
      userInputOne,
      userInputTwo,
      randomName2,
      setEducation : setEducation,
      education,
      EducationInut
    };
  },
};
</script>
