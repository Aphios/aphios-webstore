<template>

    <icon
      v-if="isUp" class="arrow arrow-interactive clickable"    
      name="angle-up"
      alt="Flèche pour replier le bloc"
      @click="toggleArrow"
    />
    
    <icon
      v-else class="arrow arrow-interactive clickable"
      name="angle-down"
      alt="Flèche pour déplier le bloc"
      @click="toggleArrow"
    />

</template>

<script>

export default {
    name: "Arrow",
    data(){
      return {
        isUp : false
      }
    },
    methods: {
      toggleArrow(){
        this.isUp = !this.isUp
        this.$emit("toggleComponent")
      }
    }

}

</script>

<style lang="scss" scoped>

.arrow {
  font-size: 2rem;
  color: #202347;
  &.arrow-interactive {
    position: absolute;
    top: 10px;
    left: 90%;
    width: 20px;
    height: auto;
    @media(min-width: 450px){
        left: 95%;
    }
  }
}

</style>