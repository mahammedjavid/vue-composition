<template>
  <h1>User data component</h1>
  <p>name is {{ user.name }}</p>
  <p>age is {{ user.age }}</p>
  <p>full name and age is {{ fullName }}</p>
  <hr>
  <p>Provided data is {{provideData}}</p>
  <hr>
  <h1>Mixins</h1>
  <p>{{ getName}}</p>
</template>

<script>
import { computed, inject } from 'vue';
import sharedItems from './mixns/constans';

export default {
    mixins : [sharedItems],
  props: ["user"],
  setup(props){
    const provideData = inject('provideData')
    const fullName = computed(()=>{
        return props.user.name + ' ' + props.user.age
    })
    return {
        fullName,
        provideData
    }
  }
};
</script>
