<template>

    <DashTitle title="Total commande" />

    <div class="total-info embossed">

        <div class="spaced">
            <p>Sous-total</p>
            <p>Livraison</p>
            <p><strong>TOTAL :</strong></p>
        </div>

        <div class="spaced">
            <p>{{ purchase.subTotal.toFixed(2) }}€</p>
            <p>{{ delivery }}</p>
            <p><strong>{{ purchase.total.toFixed(2) }}€</strong></p>
        </div>

    </div>
    
</template>

<script>

import DashTitle from "./DashTitle"

export default {
    name: "Total",
    props: ["purchase"],
    components: { DashTitle },
    computed: {
        delivery(){
            return this.purchase.deliveryPrice === 0 ? "GRATUITE" : (this.purchase.deliveryPrice + "€")
        }
    }
}
</script>

<style lang="scss" scoped>

.total-info{
    justify-content: space-around;
    align-items: center;
    @media(min-width: 450px){
        justify-content: center;
    }
    div{
        &:first-child{
            text-align: left;
        }
        &:last-child{
            text-align: right;
        }
        @media(min-width: 450px){
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
    p{
        padding-left: 0;
    }
}

</style>