Vue.use(VueMask.VueMaskPlugin, {
    placeholders: {
      //'#': null,       // passing `null` removes default placeholder, so `#` is treated as character
      D: /\d/,         // define new placeholder
      Я: /[\wа-яА-Я]/, // cyrillic letter as a placeholder
    }
  })
//компоненты
Vue.component('help', {
  props: ['text', 'card', 'confirmPhone', 'confirmSms'],
  template: `
    <div class='help'>
      <img v-if='getStep === "step0"' 
        class='help__icon' 
        src='./img/price.svg' 
        alt='icon'>
      <img v-if='getStep === "step1"' 
        class='help__icon' 
        src='./img/card.svg' 
        alt='icon'>
      <img v-if='getStep === "step2"' 
        class='help__icon' 
        src='./img/smartphone.svg' 
        alt='icon'>
      <img v-if='getStep === "step3"' 
        class='help__icon' 
        src='./img/sms.svg' 
        alt='icon'>

      <span v-if='getStep === "step0"' 
        class='help__text'>
        {{text.step0}}
      </span>
      <span v-if='getStep === "step1"' 
        class='help__text'>
        {{text.step1}}
      </span>
      <span v-if='getStep === "step2"' 
        class='help__text'>
        {{text.step2}}
      </span>
      <span v-if='getStep === "step3"' 
        class='help__text'>
        {{text.step3}}
      </span>
    </div>
  `,
  computed: {
    getStep() {
      return !this.card ? 'step0' :
      this.card && !this.confirmPhone && !this.confirmSms ? 'step1' :
      this.card && this.confirmPhone ? 'step2' :
      'step3'
    }
  }
})

const app = new Vue({
    el: '#app',
    data: {
      price: 1000,
      processReg: true,
      card: {
        show: false,
        front: {
            show: true,
            complete: false
        },
        back: {
            show: false,
            complete: false
        },
        number: '',
        date: '',
        owner: '',
        code: '',
        correctDate: false
      },
      confirm: {
        enterPhone: false,
        phone: '',
        enterCode: false,
        code: '',
        errorCode: false
      },
      text: {
        step0: 'Оплатите заказ',
        step1: 'Заполните данные своей карты',
        step2: 'Подтвердите номер телефона',
        step3: 'Введите код из смс'
      }
    },
    filters: {
      currency: function(value, symbol, count) {
        return symbol + value.toFixed(count);
      }
    },
    computed: {
        firstStepComplete: function() {
          console.log(this.card.correctDate);
            return this.card.number.length === 19 && 
            this.card.date.length === 5 && 
            this.card.owner &&
            this.card.correctDate;
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
      },
      inputNumber: {
        update: function(el) {
          el.value = el.value.replace(/[^0-9]+/g, '');
        }
      },
      checkdate: {
        update: function(el, bind) {
          const value = el.value;
          const date = new Date();
          const year = +`${date.getFullYear()}`.slice(2);
          const month = date.getMonth() + 1;
          const cardDate = el.value.split('/');
          const cardYear = +cardDate[1];
          const cardMonth = +cardDate[0];
          if(value.length === 5) {
            if(cardYear < year || (cardYear === year && cardMonth < month)) {
              bind.oldValue.correctDate = false;
            } else {
              bind.oldValue.correctDate = true;
            }
          }
        }
      }
    },
    methods: {
      sendPhone() {
        this.confirm.enterPhone = false;
        this.confirm.enterCode = true; 
      },
      sendCode() {
        if(this.confirm.code === '1234') {
          this.processReg = false;
        } else {
          this.confirm.errorCode = true;
        }
      }
    },
    mounted() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      console.log({
        'год': year,
        'месяц': month
      });
    }
})
