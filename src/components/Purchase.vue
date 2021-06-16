<template>
  <DashTitle title="Suivi de commande" />

  <div class="purchase">
    <div class="purchase-info">
      <div class="underline spaced">
        <p>
          N° de commande : <strong>{{ purchase.id }}</strong>
        </p>
        <p>
          Date de commande : <strong>{{ purchaseDate }}</strong>
        </p>
        <p>
          Date de livraison : <strong>{{ deliveryDate }}</strong>
        </p>
      </div>

      <PurchaseMonitor :step="purchase.deliveryStep" />

      <ToggledBlock
        title="Informations sur les retours"
        title-class=""
        content="Ici s'afficheront les informations concernant les retours."
      />
    </div>

    <div class="articles-showcase">
      <h3>Articles ({{ articleSum }})</h3>

      <div v-for="article in purchase.articles" :key="article.id">
        <Article :purchaseData="article" />
      </div>
    </div>
  </div>
</template>

<script>
import DashTitle from "./DashTitle";
import PurchaseMonitor from "./PurchaseMonitor";
import Article from "./Article";
import ToggledBlock from "./ToggledBlock";

export default {
  name: "Purchase",
  components: { DashTitle, PurchaseMonitor, Article, ToggledBlock },
  props: ["purchase", "articleSum", "months"],
  computed: {
    deliveryDate() {
      let d = new Date(this.purchase.delivery);
      return (
        d.getDate() + " " + this.months[d.getMonth()] + " " + d.getFullYear()
      );
    },
    purchaseDate(){
      let d = new Date(this.purchase.date);
      return (
        d.getDate() + " " + this.months[d.getMonth()] + " " + d.getFullYear()
      );
    }
  },
};
</script>

<style lang="scss" scoped>
.purchase {
  display: flex;
  flex-direction: column;
  @media (min-width: 450px) {
    flex-direction: row;
  }
  &-info {
    @media (min-width: 450px) {
      width: 40%;
    }
  }
}

.articles-showcase {
  padding: 0.5rem;

  @media (min-width: 450px) {
    width: 60%;
    padding: 2rem 1rem 1rem 2.5rem;
  }
}
</style>
