<template>
    <a class="nav-link"
    :class="activeClasses"
    :href="page.nav.url">
    {{ page.nav.text }}</a>
</template>
<script>
export default {
    props: ['page','isActive'],
    computed: {
        activeClasses(){
            return {
                active:this.isActive,
                emphasize:this.isActive
            };
        }
    }
}
</script>
<style>
    .emphasize {
        text-decoration: underline !important;
    }
</style>