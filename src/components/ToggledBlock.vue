<template>

  <div class="underline toggle">

    <p :class="classname">{{ title }}</p>
    <Arrow @toggleComponent="toggleBlock" />

    <div v-show="isDisplayed" class="toggle-inner">
      <p>{{ content }}</p>
    </div>

  </div>

</template>

<script>

import Arrow from "./Arrow"

export default {
    name: "ToggledBlock",
    components: { Arrow },
    props: ["title", "content", "classname"],
    data(){
        return{
            isDisplayed: false
        } 
    },
    methods: {
        toggleBlock(){
            this.isDisplayed = !this.isDisplayed
        }
    }
}

</script>