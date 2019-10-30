<template lang="pug">
    .nav__container
        nav.nav
                router-link.nav__link(to="./") Главная
                router-link.nav__link(to="./cards") Страница с картами
                router-link.nav__link(to="./cards") Страница с картами
                router-link.nav__link(to="./cards") Страница с картами
                router-link.nav__link(to="./") Письмо Деду Морозу
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style lang="sass" scoped>
    .nav
        display: flex
        justify-content: space-between
        &__link
            color: #fff
            text-decoration: none
            text-transform: uppercase
            transition: .3s
            &:hover
                color: rgba(0,255,200,.7)
        &__container
            max-width: 1200px
            margin: 30px auto
</style>