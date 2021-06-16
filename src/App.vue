<template>
  <Header />

  <div class="page">
    <Purchase :purchase="purchase" :articleSum="articleSum" :months="months"/>
    <DeliveryInfo :purchase="purchase" :months="months"/>
    <PaymentInfo :purchase="purchase" />
    <Total :purchase="purchase" />
    <Help />
  </div>
</template>

<script>

import Header from "./components/Header";
import Purchase from "./components/Purchase";
import DeliveryInfo from "./components/DeliveryInfo";
import PaymentInfo from "./components/PaymentInfo";
import Total from "./components/Total";
import Help from "./components/Help";

export default {
  name: "App",
  components: { Header, Purchase, DeliveryInfo, PaymentInfo, Total, Help },
  data() {
    return {
      purchase: [],
      articleSum: 0,
      months : ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
    };
  },
  methods: {
    async fetchPurchase(id) {
      const response = await fetch(
        `https://aphios-webstore-api.herokuapp.com/purchases/${id}`
      );
      const data = await response.json();
      return data;
    }
  },
  async created() {
    // For the purpose of this is test page I use a specific id
    this.purchase = await this.fetchPurchase(79886)
    this.articleSum = this.purchase.articles.reduce(function (sum, art) {
      return sum + art.qty
      }, 0);
  }
};
</script>



<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap");

$main-color: #202347;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  font-family: "Gill Sans Std Light", "PT Sans", "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif;
  color: $main-color;
}

h1,
h2,
h3,
h4 {
  text-transform: uppercase;
  margin: 0.4rem;
  @media (min-width: 450px) {
    margin: 1rem;
  }
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.1rem;
}

h4 {
  font-size: 1rem;
}

.dropdown {
  transform: rotate(45deg);
}

.logo {
  height: 70px;
  width: auto;
  @media (min-width: 450px) {
    height: 50px;
  }
}

.page {
  width: 100%;
  margin: auto;
  @media (min-width: 450px) {
    width: 85%;
  }
}

.underline {
  padding: 10px;
  border-bottom: 1px solid $main-color;
}

.toggle {
  position: relative;
  &-inner {
    margin: 1rem;
  }
}

.spaced {
  line-height: 2.2em;
}

.embossed {
  border: 1px solid rgba(0, 0, 255, 0.2);
  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.3);
  margin: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  p {
    padding-left: 0.4rem;
    @media (min-width: 450px) {
      padding-left: 1rem;
    }
  }
}

.up-case {
  text-transform: uppercase;
}

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 5px 5px 1px rgba(0, 0, 255, 0.2);
  height: 100px;
  margin-bottom: 0.8rem;
  position: relative;
  &.dropdown-menu {
    position: absolute;
    top: 101px;
    left: 1px;
    z-index: 3;
    background: #fff;
    width: 100%;
    height: 90px;
    justify-content: space-evenly;
    text-align: center;
    h4 {
      font-size: 0.8rem;
    }
  }
}

.clickable {
  cursor: pointer;
}
</style>