<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        class="
          usefood-flex-container
          usefood-flex-align-center
          usefood-flex-direction-column
          margin-bottom
        "
      >
        <ul>
          <li v-for="(product, index) in products" :key="index">
            <v-card class="mx-auto" max-width="800">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="product.image[0]"
              >
                <v-card-title>{{product.name}}</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div>{{product.description}}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> Editar </v-btn>

                <v-btn color="red" text> Excluir </v-btn>
              </v-card-actions>
            </v-card>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {readProducts} from '../../services/api';

export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    readProducts()
    .then(res => {
      this.products = res.data;
    })
  }

};
</script>

<style lang="scss">
ul{
    li{
        list-style-type: none;
    }
}
</style>