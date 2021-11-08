<template>
  <v-container class="d-flex justify-center">
    <div class="card-container">
      <v-row class="card">
        <v-col cols="2">
          <img :src="product.image" alt="image product" class="image-product" />
        </v-col>
        <v-col
          cols="4"
          class="description-product d-flex flex-column justify-space-between"
        >
          <span class="card-title">{{ product.name }}</span>
          <span class="color-active serve">{{ product.count_serves }}</span>
          <p>{{ product.description }}</p>
          <span class="price-product">R${{ product.price }}</span>
        </v-col>
        <v-col cols="2">
          <div class="d-flex justify-space-between card-actions">
            <div>
              <v-icon large color="#F29C46"> mdi-pencil </v-icon>
            </div>
            <div>
              <v-icon large color="#F29C46" @click="dialog = true"> mdi-delete </v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
     
     <!-- Dialod for delete products -->
        <v-row>
          <v-dialog v-model="dialog" persistent max-width="600">
            <v-card class="d-flex flex-column dialog-card align-center">
              <div>
                <span class="dialog-title">Apagar produto</span>
              </div>
              <div>
                <span>Deseja realmente apagar este produto?</span>
              </div>
              <v-card-actions class="d-flex justify-center">
                <v-btn
                  color="primary"
                  block
                  depressed
                  @click="emitClick(product._id)"
                >
                  Sim, apagar
                </v-btn>
                <v-btn color="primary" block outlined @click="dialog = false">
                  Não
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
    </div>
    
  </v-container>
</template>

<script>
export default {
  props: ["product"],
  data(){
    return{
        dialog:false
    }
  }, 
  methods: {
    emitClick(id){
      this.$emit('emit-click', id)
      console.log(id)
      this.dialog = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.image-product {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}

.price-product {
  color: #72bc55;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: 400;
}
.description-product {
  margin-left: 100px;
}

.card {
  border-radius: 10px;
  background-color: #efefef;
  margin-bottom: 10px;
}
.card-actions {
  margin-top: 160px;
  margin-left: 100px;
}

.card-title {
  color: #c14d19;
  font-size: 24px;
  font-weight: 400;
}
.serve {
  margin-top: -20px;
}

.card-container {
  width: 70%;
}


</style>