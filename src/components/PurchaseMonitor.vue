<template>

  <div class="purchase-monitor toggle underline">

    <p>Suivi commande</p>
    <Arrow @toggleComponent="toggleMonitor" />

    <div class="schemas" v-show="isDisplayed">

      <div class="schema">
        <img src="../assets/delivery_1.png" alt="Illustration emballage" />
        <p v-if="step > 0 && step < 5">&#9745;</p>
        <p v-else>&#9744;</p>
      </div>

      <p class="arrow">&#8702;</p>

      <div class="schema">
        <img
          src="../assets/delivery_2.png"
          alt="Illustration chargement commande"
        />
        <p v-if="step > 1 && step < 5">&#9745;</p>
        <p v-else>&#9744;</p>
      </div>

      <p class="arrow">&#8702;</p>

      <div class="schema">
        <img
          src="../assets/delivery_3.png"
          alt="Illustration commande en route"
        />
        <p v-if="step > 2 && step < 5">&#9745;</p>
        <p v-else>&#9744;</p>
      </div>

      <p class="arrow">&#8702;</p>

      <div class="schema">
        <img
          src="../assets/delivery_4.png"
          alt="Illustration commande livrée"
        />
        <p v-if="step == 4">&#9745;</p>
        <p v-else>&#9744;</p>
      </div>

    </div>

  </div>

</template>

<script>

import Arrow from "./Arrow";

export default {
  name: "PurchaseMonitor",
  props: ["step"],
  components: { Arrow },
  data(){
    return {
      isDisplayed: false
    }
  },
  methods : {
    toggleMonitor(){
      this.isDisplayed = !this.isDisplayed
    }
  }
};

</script>

<style lang="scss" scoped>

img {
  height: 60px;
  width: 60px;
  margin-bottom: 1rem;
  @media(min-width: 450px){
    height: auto;
  }
}

.schemas {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.schema {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  @media(min-width: 450px){
    margin: 1rem;
  }
}

.purchase-monitor {
  padding: 10px;
}

</style>