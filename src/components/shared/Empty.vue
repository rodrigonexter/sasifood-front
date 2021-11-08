<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4"  class="usefood-flex-container usefood-flex-align-center usefood-flex-direction-column margin-bottom">
        <img src="../../assets/img/empty.png" alt="" width="300px" />
        <h2 class="title">Ops! Nenhum produto cadastrado</h2>
        <h3>Cadastre o seu primeiro produto e começe a vender agora mesmo.</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.margin-bottom {
  margin-bottom: 50px;
}

h2{
  color: #27d;
  font-weight: 900;
}

h3 {
  color: #777;
  font-weight: 300;
}

</style>