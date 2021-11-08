<template>
  <EditFormHeader/>
</template>

<script>
import EditFormHeader from '../../components/edit/EditFormHeader.vue'

export default {
components: {
    EditFormHeader
},
mounted(){
  const productId = this.$route.params.id;
  console.log(productId)
}

}
</script>

<style>

</style>