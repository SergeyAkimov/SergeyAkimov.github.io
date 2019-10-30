// окно детальной информации при выборе карты
<template lang="pug">
    .container.card-detail
        div
            h2.card-detail__title {{this.currCard.title}}
            hr
            h4.card-detail__subtitle Характеристики:
            ul.card-detail__props.list
                li.list__item Настройки: 
                    span 
                        //выдержка
                        svg(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24")
                            path(d="M0 0h24v24H0z" fill="none")
                            path(fill="#fff" d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z")
                        | {{this.currCard.settings.shutter}} &nbsp;
                        //диафрагма
                        | {{this.currCard.settings.aperture}} &nbsp;
                        //светочувствительность
                        | {{this.currCard.settings.iso}}
                li.list__item Место съёмки: 
                    button.list__geo(type="button" @click="showMap = !showMap") 
                        svg(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24")
                            path(d="M0 0h24v24H0z" fill="none")
                            path.path(fill="#fff" d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z")
                        | {{this.currCard.geoData.pointName}}
                    transition(name="fade")
                        yandex-map(v-show="showMap"
                            :settings="map.settings" 
                            :coords="this.currCard.geoData.coords"
                            zoom = 14
                            :controls = ['zoomControl']
                            :behaviors = ['drag'])
                            ymap-marker(:coords="this.currCard.geoData.coords"
                                        marker-id="1"
                                        marker-type="placemark")
                li.list__item Описание: #[p.card-detail__text {{this.currCard.text}}]
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
    name: "CardDetail",
    props: ["currCard"],
    data(){
        return {
            showMap: false,
            map: {
                settings: {
                    apiKey: '',
                    lang: 'ru_RU',
                    coordorder: 'latlong',
                    version: '2.1'
                },
                placemarks: {
                    clusterName: '1',
                    // markerId: '1'
                }
            }
        }
    },
    components: {
        yandexMap, 
        ymapMarker
    }
}
</script>

<style lang="sass" scoped>
    $interval: 1s
    .card-detail
        display: block
        max-width: 900px
        width: 100%
        padding: 0 15px
        position: absolute
        right: 15px
        height: calc(100vh - 20px)
        border: 1px solid rgba(0,255,200,.7)
        z-index: 1
        overflow: hidden
        transition 1s
        // animation: fade-in 2s forwards
        // &:before
        //     content: ''
        //     position: absolute
        //     top: -100%
        //     left: 0
        //     width: 100%
        //     height: 100%
        //     background: linear-gradient(to top, rgba(0,255,200,.7) 0%, rgba(255,255,255,0) 100%)
        //     animation: gradient-move .5s .5s forwards
        &__title,
        &__subtitle,
        &__text
            opacity: 0
        &__title
            animation: fade-in .5s .5 * $interval forwards
        &__subtitle
            animation: fade-in .5s 1 * $interval forwards
        &__text
            text-indent: 1.5em
            animation: fade-in .5s 1.5 * $interval forwards
        &__props
            list-style-type: none
        & > div
            height: 100%
            overflow: auto
        .list
            &__item
                margin: 20px 0
            &__geo
                background: transparent
                color: #fff
                border: 1px solid #fff
                outline: none
                cursor: pointer
                padding: 10px 20px
                font-size: 1em
                display: inline-flex
                align-items: center
                transition: .3s
                &:hover
                    border-color: rgba(0, 255, 200, 0.7)
                    color: rgba(0, 255, 200, 0.7)
                    .path
                        fill: rgba(0, 255, 200, 0.7)
                svg
                    margin-right: 10px
                .path
                    transition: .3s
    .ymap-container
        margin-top: 30px
        height: 500px
        // animation: fade-in .5s .5s forwards
    .ymaps-2-1-74-ground-pane
        filter: invert(100%)
        
    @keyframes gradient-move 
        0%
            top: -100%
        100%
            top: 100%  
    @keyframes fade-in
        0%
            opacity: 0
        100%
            opacity: 1
    .fade-enter-active,
    .fade-leave-active
        transition: .5s
    
    .fade-enter,
    .fade-leave-to
        opacity: 0
        height: 0
</style>