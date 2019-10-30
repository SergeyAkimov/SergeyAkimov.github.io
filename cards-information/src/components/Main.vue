<template lang="pug">
    div
        .main.main__container
            h1.main__title Добро пожаловать
            p.main__text Выберите один из пунктов меню
</template>

<script>
export default {
    name: "Main",
    components: {

    }
}
</script>

<style lang="sass" scoped>
    .main
        &__container
            max-width: 1200px
            margin: auto
        &__nav
            display: flex
            justify-content: space-between
        &__link
            color: #fff
            text-decoration: none
            text-transform: uppercase
            transition: .3s
            &:hover
                color: rgba(0,255,200,.7)

</style>