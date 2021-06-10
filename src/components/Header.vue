<template>

    <div class="header">

        <div class="menu-icon clickable" @click="toggleMenu">
            <div class="menu-icon icon-line"></div>
            <div class="menu-icon icon-line"></div>
            <div class="menu-icon icon-line"></div> 
        </div>

        <img src="../assets/aphios_logo.png" alt="Logo" class="logo"/>

        <div class="menu">
            <div class="product-link">
                <h2>Nos produits</h2>
                <Arrow @toggleComponent="toggleProducts"/>
            </div>
            <h2>Le concept</h2>
            <h2>Avis</h2>
            <img src="../assets/logo_cat.png" alt="Illustration chat" class="cat-img logo">
            <h2>Marques</h2>
            <h2>Blog</h2>
            <h2>Contactez-nous</h2>
        </div>

        <img src="../assets/cart.png" alt="Icone panier" class="logo logo-cart">
        
        <DropdownProductMenu v-show="showProductMenu" />

        <DropdownMenu v-show="showMenu" />

    </div>

</template>

<script>

import DropdownMenu from "./DropdownMenu"
import DropdownProductMenu from "./DropdownProductMenu"
import Arrow from "./Arrow"

export default {
    name: "Header",
    components: { DropdownProductMenu, DropdownMenu, Arrow },
    data(){
        return {
            showProductMenu: false,
            showMenu: false
        }
    },
    methods: {
        toggleProducts(){
            this.showProductMenu = !this.showProductMenu
        },
        toggleMenu(){
            this.showMenu = !this.showMenu
        },
        onResize(){
            if(window.innerWidth < 450 && this.showProductMenu === true){
                this.showProductMenu = false
            }else if(window.innerWidth > 450 && this.showMenu === true){
                this.showMenu = false
            }
        }
    },
    created(){
        window.addEventListener("resize", this.onResize)
    },
    unmounted(){
        window.removeEventListener("resize", this.onResize)
    } 
}
</script>

<style lang="scss" scoped>

.menu-icon{
    @media(min-width: 450px){
        display:none
    }
    &.icon-line{
      width: 35px;
      height: 5px;
      background-color:#202347;
      margin: 8px 0;
    }
}

.menu{
    display: none;
    @media(min-width: 450px){
        display: flex;
    }
    .cat-img{
        margin: 0 1.5rem 0 1.5rem;
    }
}

.logo-cart{
    cursor: pointer;
}

.product-link{
    position: relative;
    margin-right: 1rem;
}

.arrow{
    &.arrow-interactive{
    top: 22px;
    color: #bfbfbf;
    }
}

</style>
