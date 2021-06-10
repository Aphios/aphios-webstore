<template>

  <div class="article embossed">

    <div class="article-poster">
      <img
        :src="articleImgSrc"
        alt="Illustration article"
      />
    </div>

    <div class="article-description">
      <h3>{{ articleData.title }}</h3>
      <h3>{{ articleData.price }}</h3>
      <p>{{ articleData.size }}</p>
      <p>Qté : {{ purchaseData.qty }}</p>
    </div>
    
  </div>

</template>

<script>

export default {
    name: "Article",
    props: ["purchaseData"],
    data(){
        return{
            articleData: {},
            articleImgSrc: ""
        }
    },
    methods: {
      async fetchArticle(id) {
        const response = await fetch(`https://aphios-webstore-api.herokuapp.com/articles/${id}`)
        const data = await response.json()
        return data
        }
    },
    async created(){
        this.articleData = await this.fetchArticle(this.purchaseData.id)
        this.articleImgSrc = require(`../assets/${this.articleData.poster}`)
    }
}

</script>

<style lang="scss" scoped>

.article {
  &-poster {
    width: 40%;
    @media(min-width: 450px){
      width: 30%;
    }
    >img{
      width: 90%;
      @media(min-width: 450px){
        width: 80%;
      }
    }
  }
  &-description {
    width: 60%;
    @media(min-width: 450px){
      width: 70%;
    }
  }
}

p {
  text-transform: uppercase;
}

h3 {
  margin-top: 0;
}

</style>
