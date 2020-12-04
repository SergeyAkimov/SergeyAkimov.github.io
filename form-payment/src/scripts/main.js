Vue.use(VueMask.VueMaskPlugin, {
    placeholders: {
      //'#': null,       // passing `null` removes default placeholder, so `#` is treated as character
      D: /\d/,         // define new placeholder
      Я: /[\wа-яА-Я]/, // cyrillic letter as a placeholder
    }
  })

const app = new Vue({
    el: '#app',
    data: {
      price: 1000,
      card: {
          show: false,
          front: {
              show: true,
              complete: false,
            //   inputs: [
            //       {
            //           label: 'Номер карты'
            //       }
            //   ]
          },
          back: {
              show: false,
              complete: false
          },
          number: '',
          date: '',
          owner: '',
          code: ''
      }
    },
    filters: {
      currency: function(value, symbol, count) {
        return symbol + value.toFixed(count);
      }
    },
    computed: {
        firstStepComplete: function() {
            return this.card.number.length === 19 && 
            this.card.date.length === 5 && 
            this.card.owner;
        },
        secondStepComplete: function() {
          return this.card.code.length === 3 ? true : false;
        }
    },
    directives: {
      uppercase: {
        update: function (el) {
          el.value = el.value.replace(/[0-9]/g, '').toUpperCase()
        }
      }
    }
  })
