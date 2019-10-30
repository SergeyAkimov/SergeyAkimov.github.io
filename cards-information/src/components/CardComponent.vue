// компонент отдельной карты
<template lang="pug">
    article.card(@click="viewDetailsClicked")
        transition(name="rotate-front")
            .card__front(v-show="card.showFrontSide")
                img.card__img(:src="card.img.src" :alt="card.img.alt")
                h2.card__title {{card.title}}
                //p.card__text {{card.text}}
                //button.card__button(type="button" @click="viewDetailsClicked") Подробнее
        transition(name="rotate-back")
            .card__back(v-show="!card.showFrontSide")
                p.card__back_black-block Нажмите, чтобы вернуться назад  
                //button.card__button(type="button" @click="viewDetailsClicked") Вернуться обратно
</template>

<script>
export default {
    name: "CardComponent",
    props: ["card", "index"],
    methods: {
        viewDetailsClicked(){
            this.$emit("viewDetails", this.index);
        }
    },
}
</script>

<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css?family=Caveat:400,700&display=swap&subset=cyrillic');
    $gradient-offset-top: 100%
    $active-color: rgba(0,255,200,.7)
    .card
        width: 300px + 30 * 2
        position: relative
        transform-origin: center
        transform-style: preserve-3d
        perspective: 900px
        z-index: 2
        transition: 0.3s
        margin-bottom: 30px
        &__front,
        &__back
            padding: 30px 30px 80px
            background: #fff
            color: #000
            border: 3px solid #fff
            display: flex
            flex-direction: column
            align-items: center
            overflow: hidden
            backface-visibility: hidden
            transition: 0.3s
            cursor: pointer
            &:before
                content: ''
                position: absolute
                width: 100%
                height: $gradient-offset-top
                background: linear-gradient(to top, $active-color 0%, rgba(255,255,255,0) 100%)
                top: -$gradient-offset-top
                pointer-events: none
            &:hover
                border-color: $active-color
                box-shadow: 0 0 10px 2px $active-color
                transform: translateY( -4px)
                &:before
                    animation: gradient-move .7s forwards
        &__front
            position: relative
            // height: 100%
        &__back
            position: absolute
            top: 0
            &_black-block
                width: 300px
                height: 300px
                background: #000
                color: #fff
                display: flex
                justify-content: center
                align-items: center
                text-align: center
        &__img
            max-width: 100%
            width: 300px
            height: 300px
            object-fit: cover
        &__title
            padding: 20px 20px 20px
            margin: 0
            text-align: center
            position: absolute
            bottom: 0
            transform: translate(80px, -50px) rotate(-45deg)
            color: #a00
            font-family: 'Caveat', cursive
            width: 70%
            font-size: 2em
        &__text
            // padding: 20px 20px
            margin: 0
            // width: calc(1200px / 12 * 3.7)
        &__button
            color: #fff
            background: transparent
            padding: 10px 50px
            border: 1px solid #fff
            border-radius: 5px
            text-decoration: none
            transition: 0.3s
            margin-top: auto
            position: relative
            overflow: hidden
            cursor: pointer
            font-size: 1em
            outline: none
            &:before
                content: ''
                position: absolute
                top: 0
                width: 100%
                height: 100%
                left: 0
                transition: .5s
                transform: scale(0)
                z-index: -1
            &:hover
                border-color: transparent
                &:before
                    transform: scale(1.5)
                    background: radial-gradient(ellipse at center, rgba(255,255,255,0)  0%, $active-color 100%)
        &.active
            position: absolute
            left: 50%
            transform: translateX(-50%)
            animation: move-to-left .5s .3s forwards

    @keyframes gradient-move 
        0% 
            top: -$gradient-offset-top
        100%
            top: 100%
    
    @keyframes move-to-left
        0%
            left: 50%
            transform: translateX(-50%)
        100%
            left: 0
            transform: translateX(0)
    //анимация
    .rotate-front-enter-active,
    .rotate-front-leave-active
        transition-delay: opacity 1s
    
    .rotate-front-enter,
    .rotate-front-leave-to
        transform: rotateY(-180deg)
        opacity: 0
    
    .rotate-back-enter-active,
    .rotate-back-leave-active
        transition-delay: opacity 1s
    
    .rotate-back-enter,
    .rotate-back-leave-to
        transform: rotateY(180deg)
        opacity: 0
</style>