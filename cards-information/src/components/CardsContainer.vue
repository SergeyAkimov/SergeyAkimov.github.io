// общий список всех карт
<template lang="pug">
    transition(name="fade")
        div
            .cards__container
                card-component(v-for="(card, index) in cards" 
                                    :class="{active: card.isActive}"
                                    v-show="card.showCard" 
                                    :card="card" :index="index" 
                                    @viewDetails="viewDetails")
            //transition(name="fade")
            card-detail(v-if="showDetail"
                        :currCard="currCard")
</template>

<script>
import axios from "axios";
import CardComponent from "./CardComponent.vue";
import CardDetail from "./CardDetail.vue";
export default {
    name: "cards-container",
    data() {
        return {
            cards: null,
            showDetail: false,
            currCard: null 
        }
    },
    components: {
        CardComponent,
        CardDetail
    },
    methods: {
        viewDetails(index) {
            for(const card of this.cards) {
                card.showCard = !card.showCard;
            }
            this.cards[index].showCard = true;
            this.cards[index].showFrontSide = !this.cards[index].showFrontSide;
            this.cards[index].isActive = !this.cards[index].isActive;
            this.showDetail = !this.showDetail;
            this.currCard = this.cards[index];
        }
    },
    created() {
        axios.get("./src/static/cardsinf.json")
            .then(response => {
                this.cards = response.data.cards;
            })
    }
}
</script>

<style lang="sass">
    .cards
        &__container
            // max-width: 1200px
            margin: auto
            padding: 0 15px
            display: flex
            justify-content: space-around
            flex-wrap: wrap
            // height: 100vh
            // background: url(../../src/static/images/photo-texture.png)

    .fade-enter-active,
    .fade-leave-active
        transition: .5s
    
    .fade-enter,
    .fade-leave-to
        transform: translateY(10px)
        opacity: 0
</style>