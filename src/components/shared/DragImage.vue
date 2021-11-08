<template>
      <div class="dragArea">
          <input  class="d-none" ref="fileInput" type="file" @change="setImage" enctype="multipart/form-data">

          <div class="drag-drop-box size-default" @click="$refs.fileInput.click()" v-cloak @drop.prevent="setImage" @dragover.prevent="setImage">
            
              <div class="d-flex flex-column align-center">
                  <img src="@/assets/img/upload.svg" width="150" alt="">
                  <span class="d-black mt-3">
                      Arraste a imagem para upload
                  </span>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    methods:{
        setImage(event){
            console.log(event);
        }
    }
}
</script>

<style>
.dragArea {
  width: 760px;
  height: 300px;
  background-color: #efefef;
  border: 2px solid #c14d19;
  border-radius: 10px;
}
.size-default{
    height: 100%;
}
</style>