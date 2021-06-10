<template>

    <div>
        <div class="dashed-title">
            <h3>{{ title }}</h3>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "DashTitle",
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>

div{
    display:flex;
    flex-direction: column;
    position: relative;
}

.dashed-title{
    display:flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    &::after{
        border-bottom: .1rem solid #202347;
        content: " ";
        display: block;
        left: 0;
        margin-left: -0.4rem;
        margin-right: -0.4rem;
        position: absolute;
        top: 1.2rem;
        width: calc(100% + 1.8rem);
        @media(min-width: 450px){
            top: 1.8rem;
        }
    }
  }

h3{
    background: #fff;
    display: inline-block;
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    z-index: 2;
    letter-spacing: 0.1rem;
    @media(min-width: 450px){
        letter-spacing: 0.2rem;
    }
}

</style>