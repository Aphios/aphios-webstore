<template>

    <DashTitle title="Informations de paiement" />

    <div class="payment-info embossed">
        <img :src="paymentImgSrc" alt="icône mode de paiement">
        <p>{{ purchase.paymentMethod }}</p>
    </div>
    
</template>

<script>

import DashTitle from "./DashTitle"

export default {
    name: "PaymentInfo",
    props: ["purchase"],
    components: { DashTitle },
    data(){
        return {
            paymentImgSrc : ""
        }
    },
    watch: {
        purchase(){
            this.getPaymentImgSrc()
        }
    },
    methods: {
        getPaymentImgSrc(){
            if(!this.purchase){
                return
            }
            this.paymentImgSrc = require(`../assets/${this.purchase.paymentMethod.toLowerCase()}.jpg`)
        }
    } 
}

</script>

<style lang="scss" scoped>

.payment-info{
    justify-content: flex-start;
    align-items: center;
}

img{
    height: 2rem;
}

</style>