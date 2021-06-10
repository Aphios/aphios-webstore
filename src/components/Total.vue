<template>

    <DashTitle title="Total commande" />

    <div class="total-info embossed">

        <div class="spaced">
            <p>Sous-total</p>
            <p>Livraison</p>
            <p><strong>TOTAL :</strong></p>
        </div>

        <div class="spaced">
            <p>{{ purchase.subTotal }}</p>
            <p>{{ purchase.deliveryPrice }}</p>
            <p><strong>{{ purchase.total }}</strong></p>
        </div>

    </div>
    
</template>

<script>

import DashTitle from "./DashTitle"

export default {
    name: "Total",
    props: ["purchase"],
    components: { DashTitle }
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