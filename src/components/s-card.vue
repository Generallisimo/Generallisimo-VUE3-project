<template>
    <div class="s-card">
        <h1>Card</h1>
         <!-- проверка на наличие товара в корзине если нет то это -->
         <p v-if="!CARD.length">Not found</p>
        <router-link :to="{name: 'catalog'}">
            <div class="s-catalog-link-to-card">Back to catalog</div>
        </router-link>  
        
             <!-- v-for можно выводить 2 значения то есть еще и индекс -->
             <!-- @btn мы можем послать полученый арг в кнопку родителю -->
        <!-- <sCardItem
        v-for="item, index in card_data"
        :key="item.article"
        :card_item_data="item"
        @deleteBtn="deleteBtn(index)"        
        >
        </sCardItem> -->
       
        <!-- при роуте работаем уже с геттерами -->
        <sCardItem
        v-for="item, index in CARD"
        :key="item.article"
        :card_item_data="item"
        @deleteBtn="deleteBtn(index)"
        @minus="minus(index)"
        @plus="plus(index)"        
        >
        </sCardItem>
        <div class="s-card__total">
            <p class="total__name">Total:</p>
            <p>{{ cardTotal }}</p>
        </div>
    </div>
</template>
<script>
    import sCardItem from './s-card-item.vue';
    import { mapActions, mapGetters } from 'vuex';
    
    export default{
        name:"s-card",
        components:{
            sCardItem
        },
        props:{
            // для связки с CARD создаем дочерний элемент и доб на основную стр
            // card_data:{
            //     type: Array,
            //     default(){
            //         return[]
            //     }
            // }
        },
        data(){
            return{

            }
        },
        computed:{
            ...mapGetters([
            'CARD'
        ]),
        // делаем подсчет тотал в корзине
        cardTotal(){
            
            // в массив будем вносить данные 
            // let result =[]
            // цикл по которому будем проходить
            // for(let item in this.CARD){
                // кладем в result перемножаем цену на количество
                // result.push(item.price * item.quantity);
            // }
            // получаем
            // result = result.reduce(function(sum, el){
            //     return sum + el;
            // })
            // return result;
            
            // свой вариант для Vue 3
            return this.CARD.map(el => Math.floor(el.price) * el.quantity).reduce((acc, el) => acc = acc + el, 0);
        }
        },
        methods:{
            ...mapActions([
                'DELETE_FROM_CARD',
                'MINUS',
                'PLUS'
            ]),
            // выводим индекс для удал опред элемента
            deleteBtn(index){
                this.DELETE_FROM_CARD(index)
            },
            minus(index){
                this.MINUS(index)
            },
            plus(index){
                this.PLUS(index)
            }
        }
    }
</script>
<style lang="scss">
@import '../assets/style/style.scss';
  .s-card  {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*2 $padding*3;
      display: flex;
      justify-content: center;
      background:#26ae68;
      color: #ffffff;
      font-size: 20px;
    }

    .total__name {
      margin-right: $margin*2;
    }
  }
</style>