<template>

    <DashTitle title="Besoin d'aide ?" />

    <div class="underline separator"></div>

    <ToggledBlock title="Foire aux questions" 
        classname="up-case"
        content="Ici s'afficheront les FAQ."
    />
    
    <ToggledBlock title="La garantie"
        classname="up-case"
        content="Ici s'afficheront les informations sur la garantie."
    />

    <ToggledBlock title="Signaler un problème"
        classname="up-case"
        content="Ici s'afficheront les informations pour signaler un problème."
    />

    <ToggledBlock title="Comment faire un retour ?"
        classname="up-case"
        content="Ici s'afficheront les informations sur les retours."
    />

</template>

<script>

import DashTitle from "./DashTitle"
import ToggledBlock from "./ToggledBlock"

export default {
    name: "Help",
    components: { DashTitle, ToggledBlock }
}

</script>

<style lang="scss" scoped>

.separator{
    width: 100%;
}

</style>
