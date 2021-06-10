<template>

    <DashTitle title="Informations sur la livraison" />

    <div class="delivery-info embossed">

        <div>
            <h4>Adresse de collecte</h4>
            <p>{{ purchase.deliveryAdressName }}</p>
            <p>{{ purchase.deliveryAdress }}</p>
            <p>{{ purchase.deliveryCity }}</p>
            <p>{{ purchase.deliveryZipcode }}</p>
            <p>{{ purchase.deliveryCountry }}</p>
        </div>

        <div>
            <h4>Vos coordonnées</h4>
            <p>{{ customerData.firstname }} {{customerData.lastname}}</p>
            <p>{{ customerData.phone }}</p>
        </div>

        <div>
            <h4>Livraison estimée</h4>
            <p>{{ purchase.delivery }}</p>
        </div>

        <div>
            <h4>Mode de livraison</h4>
            <p>{{ purchase.deliveryMethod }}</p>
        </div>

    </div>

</template>

<script>

import DashTitle from "./DashTitle"

export default {
    name: "DeliveryInfo",
    components: {DashTitle},
    props: ["purchase"],
    data(){
        return{
            customerData: {}
        }
    },
    methods:{
        async fetchCustomer(){
            if(!this.purchase){
                return
            }
            const response = await fetch(`https://aphios-webstore-api.herokuapp.com/customers/${this.purchase.customerId}`)
            this.customerData = await response.json()
        }
    },
    watch : {
        purchase(){
            this.fetchCustomer()
        }
    }
}

</script>

<style lang="scss" scoped>

.delivery-info{
    flex-direction: column;
    @media(min-width: 450px){
        flex-direction : row;
    }
    div{
        padding-bottom: 1rem;
        &:last-child{
            padding-right: 1rem;
        }
        &:not(:last-child){
            border-bottom: 1px solid rgba(0, 0, 255, 0.2);
            @media(min-width: 450px){
                border-bottom: none;
            }
        }
        &:not(:first-child){
            padding-top: 0.6rem;
            @media(min-width: 450px){
                border-left: 1px solid rgba(0, 0, 255, 0.2);
                padding-top: 0;
            }
        }
    }
}

</style>